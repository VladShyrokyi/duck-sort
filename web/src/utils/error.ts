/* eslint-disable @typescript-eslint/no-explicit-any */

type ErrorHandler<Args extends any[] = any[]> = (...data: Args) => any;

export const createCatchError =
  <Args extends any[] = []>(...params: (string | ErrorHandler<Args>)[]) =>
  (e: Error, ...args: Args) => {
    console.error(...params.map((param) => (typeof param === 'string' ? param : param(...args))), e);
  };

export const wrapCatchError = <Args extends any[]>(
  fn: (...args: Args) => void,
  catchError: (e: Error, ...args: Args) => void,
) => {
  return (...args: Args) => {
    try {
      return fn(...args);
    } catch (e) {
      catchError(e as Error, ...args);
    }
  };
};

export const wrapCatchErrorAndReturnDefault = <Args extends any[], Fn extends (...args: Args) => any>(
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
