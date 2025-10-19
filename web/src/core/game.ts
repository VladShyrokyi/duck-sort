import { Engine, Events, Mouse, Render, Runner } from 'matter-js';
import { SeedService } from './seed.service';
import { GameBehaviour } from './game.behaviour';

export class Game {
  private readonly engine: Engine;
  private readonly render: Render;
  private readonly runner: Runner;
  private readonly mouse: Mouse;
  private readonly gameBehaviour: GameBehaviour;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    seed?: string,
  ) {
    this.engine = Engine.create({
      gravity: {
        x: 0,
        y: 0,
      },
    });
    this.engine.world.bounds = {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 800 },
    };
    this.runner = Runner.create();
    this.render = Render.create({
      canvas: this.canvas,
      engine: this.engine,
      options: {
        width: this.canvas.parentElement?.clientWidth || window.innerWidth,
        height: this.canvas.parentElement?.clientHeight || window.innerHeight,
        pixelRatio: 'auto' as unknown as number,
        wireframes: false,
        background: this.canvas.parentElement?.computedStyleMap()?.get('background-color')?.toString() || '#2e2e2e',
      },
    });
    this.mouse = Mouse.create(this.render.canvas);

    this.engine.render = this.render;
    this.render.mouse = this.mouse;

    const seedService = new SeedService(seed);
    this.gameBehaviour = new GameBehaviour(this.engine, seedService);
  }

  start() {
    this.gameBehaviour.onStart();

    Events.on(this.engine, 'beforeUpdate', (e) => {
      this.gameBehaviour.onBeforeUpdate(e as unknown as { delta: number });
    });
    Render.run(this.render);
    Runner.run(this.runner, this.engine);
  }

  stop() {
    Render.stop(this.render);
    Runner.stop(this.runner);
  }

  resize() {
    const width = this.render.canvas.parentElement?.clientWidth || window.innerWidth;
    const height = this.render.canvas.parentElement?.clientHeight || window.innerHeight;
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));

    Render.setSize(this.render, width, height);

    console.debug('Resized: ', {
      targetW: width,
      targetH: height,
      dpr,
      actualW: this.render.canvas.width,
      actualH: this.render.canvas.height,
    });

    Render.lookAt(this.render, this.engine.world.bounds);
  }

  // Multiplayer integration helpers
  onWin(cb: (elapsedMs: number) => void) {
    this.gameBehaviour.onWin(cb);
  }

  setHost(isHost: boolean) {
    this.gameBehaviour.setIsHost(isHost);
  }

  getDuckSnapshots() {
    return this.gameBehaviour.getDuckSnapshots();
  }

  setDuckTargets(batch: {
    tHost: number;
    snaps: { id: string; x: number; y: number; vx: number; vy: number; a?: number; av?: number }[];
  }) {
    this.gameBehaviour.setDuckTargets(batch.snaps);
    this.gameBehaviour.setDuckBatch(batch);
  }

  // Wolves helpers
  addRemoteWolf(id: string, ringColor?: string) {
    this.gameBehaviour.upsertWolf(id, false, ringColor);
  }

  removeRemoteWolf(id: string) {
    this.gameBehaviour.removeWolf(id);
  }

  setRemoteWolfTarget(id: string, target: { x: number; y: number }) {
    this.gameBehaviour.setRemoteTarget(id, target as any);
  }

  getMousePosition() {
    return { x: this.mouse.position.x, y: this.mouse.position.y };
  }

  getElapsedMs() {
    return this.gameBehaviour.getElapsedMs();
  }

  resetRound() {
    this.gameBehaviour.resetRound();
  }
}
