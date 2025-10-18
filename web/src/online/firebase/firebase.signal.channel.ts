import { SignalChannel } from '../signal.channel';
import { FirebaseRoomSession, PeerSignalData, PeerSignalPayload } from './firebase.room.session';

export class FirebaseSignalChannel implements SignalChannel<PeerSignalData> {
  constructor(
    private readonly session: FirebaseRoomSession,
    private peerId: string,
    private staleMs = 30_000,
  ) {}

  get id(): string {
    return this.peerId;
  }

  async send(message: PeerSignalPayload): Promise<void> {
    return this.session.sendSignal(this.peerId, message);
  }

  subscribe(handler: (message: PeerSignalData) => Promise<void> | void): (() => void) | undefined {
    return this.session.subscribePeerSignals(this.peerId, async (messages) => {
      await this.consumeBatch(messages, handler);
    });
  }

  private async consumeBatch(
    messages: Record<string, PeerSignalData>,
    handler: (message: PeerSignalData) => Promise<void> | void,
  ) {
    const now = Date.now();

    for (const [signalId, msg] of Object.entries(messages)) {
      if (typeof msg.t === 'number' && now - msg.t > this.staleMs) {
        try {
          await this.session.removeInboxSignals(this.peerId, signalId);
        } catch (e) {
          console.error('Failed to clean up stale signaling message for peer', this.peerId, e);
        }
        continue;
      }

      try {
        console.debug('Handling signaling message for peer', {
          peerId: this.peerId,
          signalId,
          msg,
        });
        await handler(msg);
        try {
          await this.session.removeInboxSignals(this.peerId, signalId);
        } catch (e) {
          console.error('Failed to clean up handled signaling message for peer', this.peerId, e);
        }
      } catch (e) {
        console.error('Failed to handle signaling message for peer', this.peerId, e);
      }
    }
  }
}
