export interface SignalChannel<T> {
  readonly id?: string;

  send(message: T): Promise<void>;
  subscribe(handler: (message: T) => Promise<void> | void): undefined | (() => void);
}
