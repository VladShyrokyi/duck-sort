/**
 * Debounces a function so that it is only called after it has not been called for `waitFor` milliseconds.
 *
 * @param func
 * @param waitFor
 */
export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
};

/**
 * Throttles a function so that it can only be called once every `limit` milliseconds.
 * @param func
 * @param limit
 */
export const throttle = <F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, limit: number) => {
  let inThrottle: boolean;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return (...args: Parameters<F>): void => {
    if (!inThrottle) {
      void func(...args);
      lastRan = performance.now();
      inThrottle = true;
      return;
    }

    clearTimeout(lastFunc);
    lastFunc = setTimeout(
      () => {
        if (performance.now() - lastRan >= limit) {
          void func(...args);
          lastRan = performance.now();
        }
      },
      limit - (performance.now() - lastRan),
    );
  };
};

/**
 * Sleeps for the given number of milliseconds.
 * @param ms
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Calls a function after a delay, then repeatedly at the given interval.
 *
 * @param fn
 * @param delay
 * @param interval
 */
export const delayedInterval = (fn: () => void, delay: number, interval: number) => {
  let intervalId: ReturnType<typeof setInterval>;

  const startInterval = () => {
    intervalId = setInterval(fn, interval);
  };

  const timeoutId = setTimeout(() => {
    fn();
    startInterval();
  }, delay);

  return () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  };
};
