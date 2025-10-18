const env = (import.meta as any).env || {};
export const netConfig = {
  enableInterpolation: env.VITE_NET_INTERP_ENABLE ? env.VITE_NET_INTERP_ENABLE === 'true' : true,
  sendHz: Number(env.VITE_NET_SEND_HZ ?? 20),
  renderDelayMs: Number(env.VITE_NET_RENDER_DELAY_MS ?? 120),
  maxExtrapolationMs: Number(env.VITE_NET_MAX_EXTRAP_MS ?? 100),
  warpDistancePx: Number(env.VITE_NET_WARP_PX ?? 120),
  springK: Number(env.VITE_NET_SPRING_K ?? 0.04),
  dampingC: Number(env.VITE_NET_DAMPING_C ?? 6),
} as const;

(window as any).netconfig = netConfig; // for debugging

export type NetConfig = typeof netConfig;
