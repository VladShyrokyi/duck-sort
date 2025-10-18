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
    this.runner = Runner.create();
    this.render = Render.create({
      canvas: this.canvas,
      engine: this.engine,
      options: {
        width: this.canvas.width,
        height: this.canvas.height,
        wireframes: false,
        background: '#0b0e13',
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

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;

    this.render.options.width = width;
    this.render.options.height = height;
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

  setDuckTargets(snaps: Array<{ id: string; x: number; y: number }>) {
    this.gameBehaviour.setDuckTargets(snaps);
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
