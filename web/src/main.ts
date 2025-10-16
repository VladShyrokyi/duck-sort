import { initializeFirebase } from './online/firebase';
import { environment } from './environment';
import { Game } from './core/game';
import { Multiplayer } from './online/firebase/multiplayer';

const bootstrap = async () => {
  const app = document.getElementById('app') as HTMLElement | null;
  if (!app) {
    console.error('App element not found');
    return;
  }

  const canvas = document.getElementById('game') as HTMLCanvasElement | null;

  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const getRoomId = () => {
    const roomParam = 'room';
    const url = new URL(window.location.href);
    let roomId = url.searchParams.get(roomParam) || '';

    let updated = false;
    if (!roomId) {
      roomId = `duck-${Math.random().toString(36).slice(2, 8)}`;
      url.searchParams.set(roomParam, roomId);
      updated = true;
    }
    if (updated) {
      window.history.replaceState({}, '', url.toString());
    }
    return roomId;
  };
  const isDev = () => {
    return window.location.hostname === 'localhost';
  };

  const { db, auth } = initializeFirebase(environment.firebase, isDev());

  const roomId = getRoomId();
  const game = new Game(canvas, roomId);
  window.addEventListener('resize', () => game.resize(app.clientWidth, app.clientHeight));
  game.resize(app.clientWidth, app.clientHeight);

  const multiplayer = new Multiplayer(db, auth, getRoomId(), {
    onUpdateRemoteCursor: (playerId, pos) => {
      game.addRemoteWolf(playerId);
      game.setRemoteWolfTarget(playerId, pos);
    },
    getDucks: () => game.getDuckSnapshots(),
    receiveDucks: (snaps) => game.setDuckTargets(snaps),
  });

  try {
    await multiplayer.init();
  } catch (e) {
    console.error('Failed to initialize multiplayer', e);
    alert('Failed to initialize multiplayer');
    return;
  }

  game.setHost(multiplayer.isHost);

  const publishLocal = () => multiplayer.publishCursor(game.getMousePosition());
  window.addEventListener('mousemove', publishLocal);
  window.addEventListener('touchmove', publishLocal, { passive: true });

  // Host publishes duck snapshots on an interval
  if (multiplayer.isHost) {
    setInterval(async () => {
      try {
        await multiplayer.publishDucks();
      } catch (e) {
        console.error('Failed to publish duck snapshots', e);
      }
    }, 100);
  }

  window.addEventListener('beforeunload', () => multiplayer.cleanup());

  game.start();
};

bootstrap().catch((err) => {
  console.error('Failed to bootstrap the game', err);
});
