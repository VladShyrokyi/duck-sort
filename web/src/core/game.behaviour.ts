import { Bodies, Body, Engine, Vector, World } from 'matter-js';
import { SeedService } from './seed.service';

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
  private duckTargets = new Map<number, Vector>();

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
  }

  onBeforeUpdate(e: { delta: number }) {
    const centerForce = 0.0000005;
    const separationForce = 0.0000005;
    const groupForce = 0.0000005;
    const dogForce = 0.005;

    // Ducks dynamics: host computes forces; non-host interpolates toward targets
    this.ducks.forEach((duck, idx) => {
      if (!this.isHost) {
        const target = this.duckTargets.get(idx);
        if (target) {
          const alpha = 0.2; // smoothing factor
          const newPos = Vector.add(duck.position, Vector.mult(Vector.sub(target, duck.position), alpha));
          Body.setPosition(duck, newPos);
        }
        return; // skip physics on non-host
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

      // Apply as force: F \= m \* a
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
  }

  private instantiateWalls() {
    const bounds = this.getBounds();

    const thickness = 100;

    return [
      // top
      Bodies.rectangle(bounds.x / 2, -thickness / 2, bounds.x + thickness * 2, thickness, { isStatic: true }),
      // bottom
      Bodies.rectangle(bounds.x / 2, bounds.y + thickness / 2, bounds.x + thickness * 2, thickness, { isStatic: true }),
      // left
      Bodies.rectangle(-thickness / 2, bounds.y / 2, thickness, bounds.y + thickness * 2, { isStatic: true }),
      // right
      Bodies.rectangle(bounds.x + thickness / 2, bounds.y / 2, thickness, bounds.y + thickness * 2, { isStatic: true }),
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

  private getBounds() {
    return Vector.create(this.engine.render.canvas.width, this.engine.render.canvas.height);
  }

  private getCenterPosition(): Vector {
    return Vector.div(this.getBounds(), 2);
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
    if (!this.wolves.has(id) && this.wolves.size >= this.maxWolves) return;

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

  setDuckTargets(snaps: Array<{ id: string; x: number; y: number }>) {
    for (const s of snaps) {
      const idx = Number(s.id);
      if (Number.isFinite(idx)) {
        this.duckTargets.set(idx, Vector.create(s.x, s.y));
      }
    }
  }
}
