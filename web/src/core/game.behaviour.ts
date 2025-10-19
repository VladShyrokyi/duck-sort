import { Bodies, Body, Engine, Vector, World } from 'matter-js';
import { SeedService } from './seed.service';
import { environment } from '../environment';

export class GameBehaviour {
  private readonly ducksCountPerColor = 4;
  private readonly colors = ['#00ffff', '#ff00ff', '#ffff00'];
  private readonly duckRadius = 12;
  private readonly wolfRadius = 16;
  private readonly spawnRadius = 200;
  private readonly maxWolves = 4;
  private readonly wolfIdLocal = 'local';
  private readonly wolfRingColors = ['#ff5555', '#55ff55', '#5555ff', '#ffaa00'];

  private walls: Body[] = [];
  private wolves = new Map<string, { body: Body; isLocal: boolean; ringColor: string; target?: Vector }>();
  private ducks: Body[] = [];
  private isHost = true;
  private duckTargets = new Map<number, { position: Vector; velocity: Vector }>();
  // Interpolation buffer (guest only)
  private snapBuffer: Array<{
    tHost: number;
    snaps: Array<{ id: number; x: number; y: number; vx: number; vy: number; a?: number; av?: number }>;
  }> = [];
  private clockSkewMs = 0; // host - client
  private warpCount = 0;
  private stats = { bufDepth: 0, lastAlpha: 0, lastExtrapMs: 0 };
  // timer and win state
  private startedAt: number | null = null;
  private finishedAt: number | null = null;
  private onWinCallback: ((elapsedMs: number) => void) | null = null;

  constructor(
    private readonly engine: Engine,
    private readonly seedService: SeedService,
  ) {}

  onStart() {
    this.walls = this.instantiateWalls();
    // Ensure local wolf exists
    this.upsertWolf(this.wolfIdLocal, true);

    for (const color of this.colors) {
      for (let i = 0; i < this.ducksCountPerColor; i++) {
        const position = this.getRandomPosition();
        console.debug('Spawning duck at', position);
        const duck = this.instantiate(position, this.duckRadius, color);
        this.ducks.push(duck);
      }
    }

    World.add(this.engine.world, this.walls);
    World.add(
      this.engine.world,
      Array.from(this.wolves.values()).map((w) => w.body),
    );
    World.add(this.engine.world, this.ducks);

    // mark timer start on first start
    if (this.startedAt == null) this.startedAt = performance.now();
  }

  onBeforeUpdate(e: { delta: number }) {
    const centerForce = environment.game.centerForce;
    const separationForce = environment.game.separationForce;
    const groupForce = environment.game.groupForce;
    const dogForce = environment.game.wolfForce;

    // Ducks dynamics: host computes forces; non-host interpolates toward targets
    this.ducks.forEach((duck, idx) => {
      if (!this.isHost && environment.net.enableInterpolation) {
        // Render time target on client: now + skew - delay
        const now = performance.now();
        const tRender = now + this.clockSkewMs - environment.net.renderDelayMs;
        const target = this.sampleInterpolatedDuck(idx, tRender);
        if (target) {
          this.correctBodyTowards(duck, target.position, target.velocity, e.delta / 1000);
          return;
        }
        // Fallback to legacy lerp if no sample available yet
        const legacy = this.duckTargets.get(idx);
        if (legacy) {
          const { position, velocity } = legacy;
          const interpFactor = 0.2;
          const newPos = Vector.add(Vector.mult(duck.position, 1 - interpFactor), Vector.mult(position, interpFactor));
          const newVel = Vector.add(Vector.mult(duck.velocity, 1 - interpFactor), Vector.mult(velocity, interpFactor));
          Body.setPosition(duck, newPos);
          Body.setVelocity(duck, newVel);
        }
        return;
      } else if (!this.isHost) {
        // Fallback legacy lerp
        const target = this.duckTargets.get(idx);
        if (target) {
          const { position, velocity } = target;
          const interpFactor = 0.2;
          const newPos = Vector.add(Vector.mult(duck.position, 1 - interpFactor), Vector.mult(position, interpFactor));
          const newVel = Vector.add(Vector.mult(duck.velocity, 1 - interpFactor), Vector.mult(velocity, interpFactor));
          Body.setPosition(duck, newPos);
          Body.setVelocity(duck, newVel);
        }
        return;
      }
      let acc = { x: 0, y: 0 };

      const center = this.getCenterPosition();

      // Pull toward origin \{0,0\}
      acc = Vector.add(acc, Vector.mult(Vector.sub(center, duck.position), centerForce));

      // Separation from closest duck
      let closest: Body | null = null;
      let minDist = Infinity;

      for (const other of this.ducks) {
        if (other === duck) continue;

        const d = Vector.magnitude(Vector.sub(other.position, duck.position));
        if (d < minDist) {
          minDist = d;
          closest = other;
        }
      }

      if (closest && minDist > 0.0001) {
        const dir = Vector.normalise(Vector.sub(closest.position, duck.position));
        const proximity = 1.0 / (minDist + 1.0);
        acc = Vector.add(acc, Vector.mult(dir, -separationForce * proximity));
      }

      // Group cohesion with closest N ducks
      const N = 2;
      const others = this.ducks
        .filter((d) => d !== duck)
        .sort((a, b) => {
          const da = Vector.magnitude(Vector.sub(a.position, duck.position));
          const db = Vector.magnitude(Vector.sub(b.position, duck.position));
          return da - db;
        });
      const neighbors = others.slice(0, N);
      if (neighbors.length) {
        let sum = { x: 0, y: 0 };
        for (const nb of neighbors) sum = Vector.add(sum, nb.position);
        const avg = Vector.mult(sum, 1 / neighbors.length);
        acc = Vector.add(acc, Vector.mult(Vector.sub(avg, duck.position), groupForce));
      }

      // Repulsion from all wolves
      for (const { body: wolfBody } of this.wolves.values()) {
        const toWolf = Vector.sub(wolfBody.position, duck.position);
        const distWolf = Vector.magnitude(toWolf);
        if (distWolf > 0.0001) {
          const dirWolf = Vector.normalise(toWolf);
          const dogProximity = 1.0 / (distWolf / 7.0 + 1.0);
          acc = Vector.add(acc, Vector.mult(dirWolf, -dogForce * dogProximity));
        }
      }

      // Apply as force: F = m * a
      Body.applyForce(duck, duck.position, Vector.mult(acc, duck.mass));
    });

    // Update all wolves (local uses mouse, remote uses last target)
    const k = 9;
    const maxForce = 0.02;
    const deadZone = 6;
    const dt = e.delta / 1000;

    const mouse = this.engine.render.mouse;
    for (const [, w] of this.wolves) {
      const wolf = w.body;
      const vel = wolf.velocity;
      const pos = wolf.position;

      const target = w.isLocal ? mouse.position : (w.target ?? pos);

      const toTarget = Vector.sub(target, pos);
      const distance = Vector.magnitude(toTarget);

      if (distance < deadZone) {
        Body.setVelocity(wolf, { x: 0, y: 0 });
        Body.setAngularVelocity(wolf, 0);
        if (w.isLocal) {
          Body.setPosition(wolf, target);
        }
        continue;
      }

      // critically damped spring towards target
      const sqrtK = Math.sqrt(k);
      const ax = k * (target.x - pos.x) - 2 * sqrtK * vel.x;
      const ay = k * (target.y - pos.y) - 2 * sqrtK * vel.y;

      let force = { x: wolf.mass * ax * dt * dt, y: wolf.mass * ay * dt * dt };
      const fMag = Vector.magnitude(force);
      if (fMag > maxForce) force = Vector.mult(Vector.normalise(force), maxForce);

      Body.applyForce(wolf, pos, force);
    }

    // Host checks win condition and triggers callback
    if (this.isHost && this.finishedAt == null) {
      const t = this.checkWinConditionHost();
      if (t != null) {
        this.finishedAt = t;
        const started = this.startedAt ?? t;
        const elapsed = t - started;
        this.onWinCallback?.(elapsed);
      }
    }
  }

  // Host-only: check simple win condition — all ducks of each color clustered and separated.
  // For MVP, use bounding circles per color and ensure they don't overlap and are under a small radius.
  private checkWinConditionHost(): number | null {
    if (!this.isHost) return null;
    // Group ducks by color (stored in render.fillStyle)
    const groups = new Map<string, Body[]>();
    for (const d of this.ducks) {
      const color = (d.render.fillStyle as string) || '#fff';
      const list = groups.get(color) ?? [];
      list.push(d);
      groups.set(color, list);
    }

    // Compute centroid and max distance for each group
    type Cluster = { color: string; center: Vector; radius: number };
    const clusters: Cluster[] = [];
    for (const [color, list] of groups) {
      let sum = { x: 0, y: 0 };
      for (const d of list) sum = Vector.add(sum, d.position);
      const center = Vector.mult(sum, 1 / list.length);
      let r = 0;
      for (const d of list) r = Math.max(r, Vector.magnitude(Vector.sub(d.position, center)));
      clusters.push({ color, center, radius: r });
    }
    if (!clusters.length) return null;

    // Heuristics: cluster radius small enough and clusters sufficiently separated
    const maxClusterRadius = 80; // px
    if (clusters.some((c) => c.radius > maxClusterRadius)) return null;

    // Ensure pairwise separation by at least combined radii + margin
    const sepMargin = 40;
    for (let i = 0; i < clusters.length; i++) {
      for (let j = i + 1; j < clusters.length; j++) {
        const a = clusters[i],
          b = clusters[j];
        const dist = Vector.magnitude(Vector.sub(a.center, b.center));
        if (dist < a.radius + b.radius + sepMargin) return null;
      }
    }
    // Consider won
    return performance.now();
  }

  private instantiateWalls() {
    const bounds = this.engine.world.bounds;
    const { width, height } = this.getWorldSize();

    const thickness = 100;

    console.debug('Instantiating walls with bounds', bounds, { width, height });

    return [
      // top
      Bodies.rectangle(bounds.max.x / 2, bounds.min.y, width + thickness * 2, thickness, {
        isStatic: true,
      }),
      // bottom
      Bodies.rectangle(bounds.max.x / 2, bounds.max.y, width + thickness * 2, thickness, {
        isStatic: true,
      }),
      // left
      Bodies.rectangle(bounds.min.x, bounds.max.y / 2, thickness, height + thickness * 2, {
        isStatic: true,
      }),
      // right
      Bodies.rectangle(bounds.max.x, bounds.max.y / 2, thickness, height + thickness * 2, {
        isStatic: true,
      }),
    ];
  }

  private instantiate(position: Vector, radius = 5, color: string = '#ffffff') {
    return Bodies.circle(position.x, position.y, radius, {
      frictionAir: 0.06,
      restitution: 0.2,
      density: 0.02,
      render: { fillStyle: color },
    });
  }

  private getWorldSize() {
    const bounds = this.engine.world.bounds;
    return { width: bounds.max.x - bounds.min.x, height: bounds.max.y - bounds.min.y };
  }

  private getCenterPosition(): Vector {
    const { width, height } = this.getWorldSize();
    return Vector.create(width / 2, height / 2);
  }

  private getRandomPosition(): Vector {
    const rng = this.seedService.getRandomNumber.bind(this.seedService);
    // Use square root method - generate random angle and radius
    const angle = rng() * Math.PI * 2;
    const radius = Math.sqrt(rng()); // Square root gives uniform distribution

    // Convert polar coordinates to cartesian
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return Vector.add(this.getCenterPosition(), Vector.mult(Vector.create(x, y), this.spawnRadius));
  }

  // Wolves management
  upsertWolf(id: string, isLocal: boolean, ringColor?: string) {
    if (this.wolves.has(id)) return;
    if (!this.wolves.has(id) && this.wolves.size >= this.maxWolves) {
      throw new Error('Max wolves reached');
    }

    const color = '#ffffff';
    const index = this.wolves.size % this.wolfRingColors.length;
    const ring = ringColor ?? this.wolfRingColors[index];
    const body = this.instantiate(this.getCenterPosition(), this.wolfRadius, color);
    // Use ring color via stroke
    body.render.strokeStyle = ring;
    body.render.lineWidth = 3;

    this.wolves.set(id, { body, isLocal, ringColor: ring });
    World.addBody(this.engine.world, body);
  }

  removeWolf(id: string) {
    const entry = this.wolves.get(id);
    if (!entry) return;
    World.remove(this.engine.world, entry.body);
    this.wolves.delete(id);
  }

  setRemoteTarget(id: string, target: Vector) {
    let w = this.wolves.get(id);
    if (!w) {
      this.upsertWolf(id, false);
      w = this.wolves.get(id)!;
    }
    if (w.isLocal) return; // local target comes from mouse
    w.target = { x: target.x, y: target.y };
  }

  // Host/non-host control
  setIsHost(value: boolean) {
    this.isHost = value;
  }

  // Duck sync APIs
  getDuckSnapshots() {
    return this.ducks.map((d, idx) => ({
      id: String(idx),
      x: d.position.x,
      y: d.position.y,
      vx: d.velocity.x,
      vy: d.velocity.y,
    }));
  }

  setDuckTargets(snaps: { id: string; x: number; y: number; vx: number; vy: number }[]) {
    // Legacy path: update immediate targets (used when interpolation disabled)
    for (const s of snaps) {
      const idx = Number(s.id);
      if (!Number.isFinite(idx)) continue;
      this.duckTargets.set(idx, { position: Vector.create(s.x, s.y), velocity: Vector.create(s.vx, s.vy) });
    }
  }

  // New snapshot batch with host timestamp for interpolation buffering
  setDuckBatch(batch: {
    tHost: number;
    snaps: { id: string; x: number; y: number; vx: number; vy: number; a?: number; av?: number }[];
  }) {
    if (this.isHost) return; // host doesn't buffer
    // Estimate clock skew using exponential moving average
    const now = performance.now();
    const sampleSkew = batch.tHost - now; // host - client
    const alpha = 0.1;
    this.clockSkewMs = this.clockSkewMs === 0 ? sampleSkew : this.clockSkewMs * (1 - alpha) + sampleSkew * alpha;

    // Append and trim buffer
    const snaps = batch.snaps.map((s) => ({ id: Number(s.id), x: s.x, y: s.y, vx: s.vx, vy: s.vy, a: s.a, av: s.av }));
    this.snapBuffer.push({ tHost: batch.tHost, snaps });
    const horizonMs = environment.net.renderDelayMs + 2 * environment.net.maxExtrapolationMs;
    const minKeep = performance.now() + this.clockSkewMs - horizonMs;
    while (this.snapBuffer.length > 2 && this.snapBuffer[1].tHost < minKeep) {
      this.snapBuffer.shift();
    }
    this.stats.bufDepth = this.snapBuffer.length;
  }

  private sampleInterpolatedDuck(idx: number, tRender: number): { position: Vector; velocity: Vector } | null {
    if (this.snapBuffer.length === 0) return null;
    // Find bracketing frames
    let older = this.snapBuffer[0];
    let newer = this.snapBuffer[this.snapBuffer.length - 1];
    for (let i = 0; i < this.snapBuffer.length; i++) {
      const s = this.snapBuffer[i];
      if (s.tHost <= tRender) older = s;
      if (s.tHost >= tRender) {
        newer = s;
        break;
      }
    }
    const snapA = older.snaps.find((s) => s.id === idx);
    const snapB = newer.snaps.find((s) => s.id === idx);
    if (!snapA && !snapB) return null;

    if (older.tHost === newer.tHost || !snapB) {
      // Extrapolate from snapA for a bounded time
      const dtMs = Math.min(environment.net.maxExtrapolationMs, Math.max(0, tRender - older.tHost));
      const dt = dtMs / 1000;
      const sx = snapA ?? snapB!;
      return {
        position: Vector.create(sx.x + sx.vx * dt, sx.y + sx.vy * dt),
        velocity: Vector.create(sx.vx, sx.vy),
      };
    }

    const span = newer.tHost - older.tHost;
    const alpha = Math.max(0, Math.min(1, (tRender - older.tHost) / span));
    this.stats.lastAlpha = alpha;
    const a = snapA ?? snapB!;
    const b = snapB ?? snapA!;
    const pos = Vector.create(a.x + (b.x - a.x) * alpha, a.y + (b.y - a.y) * alpha);
    const vel = Vector.create(a.vx + (b.vx - a.vx) * alpha, a.vy + (b.vy - a.vy) * alpha);
    return { position: pos, velocity: vel };
  }

  private correctBodyTowards(body: Body, targetPos: Vector, targetVel: Vector, dt: number) {
    const dx = Vector.sub(targetPos, body.position);
    const dist = Vector.magnitude(dx);
    if (dist > environment.net.warpDistancePx) {
      Body.setPosition(body, targetPos);
      Body.setVelocity(body, targetVel);
      this.warpCount++;
      return;
    }
    // Damped velocity blending toward target (avoids solver fights)
    // desiredVel = targetVel + k * posError
    const k = environment.net.springK; // px/s per px error
    const desiredVel = {
      x: targetVel.x + dx.x * k,
      y: targetVel.y + dx.y * k,
    };
    // Blend factor gamma based on damping and dt
    const c = Math.max(0.0, environment.net.dampingC);
    const gamma = Math.max(0, Math.min(1, 1 - Math.exp(-c * dt)));
    const newVel = {
      x: body.velocity.x + (desiredVel.x - body.velocity.x) * gamma,
      y: body.velocity.y + (desiredVel.y - body.velocity.y) * gamma,
    };
    // Clamp to a sane speed to avoid runaway on large dt or spikes
    const maxSpeed = 800; // px/s safety cap
    const speed = Math.hypot(newVel.x, newVel.y);
    if (speed > maxSpeed) {
      const s = maxSpeed / speed;
      newVel.x *= s;
      newVel.y *= s;
    }
    Body.setVelocity(body, newVel);
  }

  // Timer / Win APIs
  onWin(cb: (elapsedMs: number) => void) {
    this.onWinCallback = cb;
  }

  getElapsedMs(now: number = performance.now()) {
    if (this.startedAt == null) return 0;
    if (this.finishedAt != null) return Math.max(0, this.finishedAt - this.startedAt);
    return Math.max(0, now - this.startedAt);
  }

  resetRound() {
    // Keep wolves; remove ducks and respawn using the same seed
    for (const d of this.ducks) World.remove(this.engine.world, d);
    this.ducks = [];
    for (const color of this.colors) {
      for (let i = 0; i < this.ducksCountPerColor; i++) {
        const position = this.getRandomPosition();
        const duck = this.instantiate(position, this.duckRadius, color);
        this.ducks.push(duck);
      }
    }
    World.add(this.engine.world, this.ducks);
    this.duckTargets.clear();
    this.startedAt = performance.now();
    this.finishedAt = null;
  }
}
