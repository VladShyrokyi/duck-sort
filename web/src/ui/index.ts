export type UiApi = {
  setRoomId: (id: string) => void;
  setPlayersCount: (n: number) => void;
  startTimer: (provider: () => number) => void;
  stopTimer: () => void;
  showWin: (timeMs: number) => void;
  hideWin: () => void;
  onNewRoom: (cb: () => void) => void;
  onRetry: (cb: () => void) => void;
};

export const setupUI = (doc: Document = document): UiApi => {
  const hudRoom = doc.getElementById('hud-room') as HTMLSpanElement | null;
  const hudPlayers = doc.getElementById('hud-players') as HTMLSpanElement | null;
  const hudTimer = doc.getElementById('hud-timer') as HTMLSpanElement | null;
  const winOverlay = doc.getElementById('win-overlay') as HTMLDivElement | null;
  const winTime = doc.getElementById('win-time') as HTMLSpanElement | null;
  const btnNewRoom = doc.getElementById('btn-new-room') as HTMLButtonElement | null;
  const btnRetry = doc.getElementById('btn-retry') as HTMLButtonElement | null;

  let timerHandle: number | undefined;
  let timerProvider: (() => number) | null = null;

  const formatMs = (ms: number) => {
    const totalMs = Math.max(0, Math.floor(ms));
    const minutes = Math.floor(totalMs / 60000);
    const seconds = Math.floor((totalMs % 60000) / 1000);
    const centis = Math.floor((totalMs % 1000) / 10);
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    const cc = String(centis).padStart(2, '0');
    return `${mm}:${ss}.${cc}`;
  };

  const api: UiApi = {
    setRoomId: (id) => {
      if (hudRoom) hudRoom.textContent = id;
    },
    setPlayersCount: (n) => {
      if (hudPlayers) hudPlayers.textContent = String(n);
    },
    startTimer: (provider) => {
      timerProvider = provider;
      if (timerHandle) window.clearInterval(timerHandle);
      timerHandle = window.setInterval(() => {
        if (!hudTimer || !timerProvider) return;
        hudTimer.textContent = formatMs(timerProvider());
      }, 50);
    },
    stopTimer: () => {
      if (timerHandle) window.clearInterval(timerHandle);
      timerHandle = undefined;
      timerProvider = null;
    },
    showWin: (timeMs) => {
      if (winOverlay) winOverlay.style.display = 'flex';
      if (winTime) winTime.textContent = formatMs(timeMs);
    },
    hideWin: () => {
      if (winOverlay) winOverlay.style.display = 'none';
    },
    onNewRoom: (cb) => {
      btnNewRoom?.addEventListener('click', cb);
    },
    onRetry: (cb) => {
      btnRetry?.addEventListener('click', cb);
    },
  };

  return api;
};
