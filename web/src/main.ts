import { initializeFirebase } from './online/firebase';
import { environment } from './environment';
import { Game } from './core/game';
import { Multiplayer } from './online/multiplayer';
import { createCatchError, wrapCatchError, wrapCatchErrorAndReturnDefault } from './utils/error';

const bootstrap = async () => {
  const app = document.getElementById('app') as HTMLElement | null;
  if (!app) {
    console.error('App element not found');
    return;
  }

  const canvas = document.getElementById('game') as HTMLCanvasElement | null;
  const hudRoom = document.getElementById('hud-room') as HTMLSpanElement | null;
  const hudPlayers = document.getElementById('hud-players') as HTMLSpanElement | null;
  const hudTimer = document.getElementById('hud-timer') as HTMLSpanElement | null;
  const winOverlay = document.getElementById('win-overlay') as HTMLDivElement | null;
  const winTime = document.getElementById('win-time') as HTMLSpanElement | null;
  const btnNewRoom = document.getElementById('btn-new-room') as HTMLButtonElement | null;
  const btnRetry = document.getElementById('btn-retry') as HTMLButtonElement | null;

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

  const { rtdb, auth } = initializeFirebase(environment.firebase, environment.isDev);

  const roomId = getRoomId();
  if (hudRoom) {
    hudRoom.textContent = roomId;
  }
  const game = new Game(canvas, roomId);
  window.addEventListener('resize', () => game.resize());
  game.resize();

  let playesrCount = 1; // local player

  const multiplayer = new Multiplayer(rtdb, auth, getRoomId(), {
    onUpdateRemoteCursor: wrapCatchError(
      (playerId, pos) => game.setRemoteWolfTarget(playerId, pos),
      createCatchError('Failed to update remote cursor', (playerId, pos) => ({ playerId, pos })),
    ),
    onPlayerJoin: wrapCatchError(
      (playerId) => {
        game.addRemoteWolf(playerId);
        playesrCount++;
        const count = playesrCount;
        if (hudPlayers) hudPlayers.textContent = String(count);
      },
      createCatchError('Failed to add remote player', (playerId) => ({ playerId })),
    ),
    onPlayerLeave: wrapCatchError(
      (playerId) => {
        game.removeRemoteWolf(playerId);
        playesrCount--;
        const count = playesrCount;
        if (hudPlayers) hudPlayers.textContent = String(count);
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
      if (state?.status === 'finished') {
        if (winOverlay) winOverlay.style.display = 'flex';
        if (winTime && typeof state.winnerTimeMs === 'number') winTime.textContent = formatMs(state.winnerTimeMs);
      }
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
    if (winOverlay) winOverlay.style.display = 'flex';
    if (winTime) winTime.textContent = formatMs(elapsedMs);
  });

  // HUD: timer tick
  window.setInterval(() => {
    if (hudTimer) hudTimer.textContent = formatMs(game.getElapsedMs());
  }, 50);

  // Overlay actions
  btnNewRoom?.addEventListener('click', async () => {
    // Create a new room id and navigate (new session)
    const url = new URL(window.location.href);
    const newId = `duck-${Math.random().toString(36).slice(2, 8)}`;
    url.searchParams.set('room', newId);
    window.location.href = url.toString();
  });
  btnRetry?.addEventListener('click', async () => {
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
    if (winOverlay) winOverlay.style.display = 'none';
  });

  game.start();

  function formatMs(ms: number) {
    const totalMs = Math.max(0, Math.floor(ms));
    const minutes = Math.floor(totalMs / 60000);
    const seconds = Math.floor((totalMs % 60000) / 1000);
    const centis = Math.floor((totalMs % 1000) / 10);
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    const cc = String(centis).padStart(2, '0');
    return `${mm}:${ss}.${cc}`;
  }
};

bootstrap().catch((err) => {
  console.error('Failed to bootstrap the game', err);
});
