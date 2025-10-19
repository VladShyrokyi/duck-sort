import { initializeFirebase } from './online/firebase';
import { environment } from './environment';
import { Game } from './core/game';
import { Multiplayer } from './online/multiplayer';
import { createCatchError, wrapCatchError, wrapCatchErrorAndReturnDefault } from './utils/error';
import { setupUI } from './ui';
import { getRandomSeed } from './core/seed.service';

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
      roomId = getRandomSeed();
      url.searchParams.set(roomParam, roomId);
      updated = true;
    }
    if (updated) {
      window.history.replaceState({}, '', url.toString());
    }
    return roomId;
  };

  const { rtdb, auth } = initializeFirebase(environment.firebase, environment.isDev);

  const roomId = getRoomId();
  const ui = setupUI();
  ui.setRoomId(roomId);
  const game = new Game(canvas, roomId);
  window.addEventListener('resize', () => game.resize());
  game.resize();

  let playersCount = 1; // local player

  const multiplayer = new Multiplayer(rtdb, auth, roomId, {
    onUpdateRemoteCursor: wrapCatchError(
      (playerId, pos) => game.setRemoteWolfTarget(playerId, pos),
      createCatchError('Failed to update remote cursor', (playerId, pos) => ({ playerId, pos })),
    ),
    onPlayerJoin: wrapCatchError(
      (playerId) => {
        game.addRemoteWolf(playerId);
        playersCount++;
        ui.setPlayersCount(playersCount);
      },
      createCatchError('Failed to add remote player', (playerId) => ({ playerId })),
    ),
    onPlayerLeave: wrapCatchError(
      (playerId) => {
        game.removeRemoteWolf(playerId);
        playersCount--;
        ui.setPlayersCount(playersCount);
      },
      createCatchError('Failed to remove remote player', (playerId) => ({ playerId })),
    ),
    getDucks: wrapCatchErrorAndReturnDefault(
      () => game.getDuckSnapshots(),
      createCatchError('Failed to get duck snapshots'),
      [],
    ),
    receiveDucks: wrapCatchError(
      (batch) => game.setDuckTargets(batch),
      createCatchError('Failed to receive duck snapshots', (snaps) => ({ snaps })),
    ),
    onHostChange: (_hostId, isSelf) => game.setHost(isSelf),
    onRoomStateChange: (state) => {
      // Only show overlay when room transitions to finished; do not auto-hide
      if (state?.status === 'finished' && typeof state.winnerTimeMs === 'number') ui.showWin(state.winnerTimeMs);
    },
  });

  try {
    await multiplayer.init();
  } catch (e) {
    console.error('Failed to initialize multiplayer', e);
    alert('Failed to initialize multiplayer');
    return;
  }

  game.setHost(multiplayer.isHost);

  // Host marks room active on start
  console.debug('Is host:', multiplayer.isHost);
  if (multiplayer.isHost) {
    try {
      await multiplayer.setRoomActive();
      console.debug('Room set to active by host');
    } catch (e) {
      console.error('Failed to set room active', e);
    }
  }

  const publishLocal = () => multiplayer.publishCursor(game.getMousePosition());
  window.addEventListener('mousemove', publishLocal);
  window.addEventListener('touchmove', publishLocal, { passive: true });

  window.addEventListener('beforeunload', () => multiplayer.cleanup());

  game.onWin(async (elapsedMs) => {
    // Host writes finished state; guests show overlay based on RTDB listener
    if (multiplayer.isHost) {
      try {
        await multiplayer.setRoomFinished(elapsedMs);
      } catch (e) {
        console.error('Failed to set room finished', e);
      }
    }
    ui.showWin(elapsedMs);
  });

  // HUD: timer tick
  ui.startTimer(() => game.getElapsedMs());

  // Overlay actions
  ui.onNewRoom(async () => {
    // Create a new room id and navigate (new session)
    const url = new URL(window.location.href);
    const newId = getRandomSeed();
    url.searchParams.set('room', newId);
    window.location.href = url.toString();
  });
  ui.onRetry(async () => {
    // Reset round within same room (host resets state to idle/active)
    if (multiplayer.isHost) {
      try {
        await multiplayer.resetRoomToIdle();
      } catch (e) {
        console.error('Failed to reset room to idle', e);
      }
      game.resetRound();
      try {
        await multiplayer.setRoomActive();
      } catch (e) {
        console.error('Failed to set room active', e);
      }
    }
    ui.hideWin();
  });

  game.start();
};

bootstrap().catch((err) => {
  console.error('Failed to bootstrap the game', err);
});
