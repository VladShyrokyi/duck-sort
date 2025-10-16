/* eslint-disable @typescript-eslint/no-explicit-any */

export const catchError = (_: Error, ...data: any[]) => console.error(...data);

export const createCatchError =
  <Args extends any[] = []>(...params: (string | ((...args: Args) => any))[]) =>
  (e: Error, ...args: Args) =>
    catchError(e, ...params.map((arg) => (typeof arg === 'string' ? arg : arg(...args))));

export const wrapCatchError = <Args extends any[], Fn extends (...args: Args) => any>(
  fn: Fn,
  catchError: (e: Error, ...args: Args) => void,
  fallbackDefault?: ReturnType<Fn>,
): Fn => {
  return ((...args: Args) => {
    try {
      return fn(...args);
    } catch (e) {
      catchError(e as Error, ...args);
      return fallbackDefault;
    }
  }) as Fn;
};
