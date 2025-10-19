/* eslint-disable @typescript-eslint/no-explicit-any */
const env = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.VITE_FIREBASE_DATABASE_URL,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
} as const;

const netConfig = {
  enableInterpolation: env.VITE_NET_INTERP_ENABLE ? env.VITE_NET_INTERP_ENABLE === 'true' : true,
  duckSendHz: Number(env.VITE_NET_SEND_HZ ?? 20),
  cursorSendHz: Number(env.VITE_NET_CURSOR_SEND_HZ ?? 20),
  renderDelayMs: Number(env.VITE_NET_RENDER_DELAY_MS ?? 120),
  maxExtrapolationMs: Number(env.VITE_NET_MAX_EXTRAP_MS ?? 100),
  warpDistancePx: Number(env.VITE_NET_WARP_PX ?? 120),
  springK: Number(env.VITE_NET_SPRING_K ?? 0.04),
  dampingC: Number(env.VITE_NET_DAMPING_C ?? 6),
} as const;

const gameConfig = {
  centerForce: 0.000_001,
  separationForce: 0.000_000_5,
  groupForce: 0.000_001,
  wolfForce: 0.005,
} as const;

// Expose for debugging
(window as any).netconfig = netConfig;
(window as any).gameConfig = gameConfig;

export const environment = {
  isDev: false,
  firebase: firebaseConfig,
  net: netConfig,
  game: gameConfig,
};
