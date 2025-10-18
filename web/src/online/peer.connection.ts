/* eslint-disable @typescript-eslint/no-explicit-any */

export type PeerMessage =
  | ({ type: 'offer' } & RTCSessionDescriptionInit)
  | ({ type: 'answer' } & RTCSessionDescriptionInit)
  | ({ candidate: string } & RTCIceCandidateInit);

export interface SignalChannel {
  send(message: PeerMessage): Promise<void>;
  subscribe(handler: (message: PeerMessage) => Promise<void> | void): undefined | (() => void);
}

export interface ConnectionHandler<T> {
  onOpen?(): void;
  onMessage(data: T): void;
  onClosed?(): void;
}

enum PeerConnectionChannel {
  GAME = 'game',
}

enum PeerConnectionChannelId {
  GAME = 0,
}

export class PeerConnection<T = any> {
  private readonly pc: RTCPeerConnection;
  private readonly dc: RTCDataChannel;
  private pendingRemoteCandidates: RTCIceCandidateInit[] = [];
  private unsubscribeSignal?: () => void;

  private _closeTimer?: number;

  constructor(
    private readonly channel: SignalChannel,
    private readonly isInitiator: boolean,
    readonly peerId: string,
    private handler?: ConnectionHandler<T>,
    private readonly graceMs = 5000,
  ) {
    this.pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });
    this.dc = this.pc.createDataChannel(PeerConnectionChannel.GAME, {
      negotiated: true,
      id: PeerConnectionChannelId.GAME,
      ordered: false,
      maxRetransmits: 0,
    });
    this.dc.onmessage = (event) => {
      const data = (typeof event.data === 'string' ? JSON.parse(event.data) : event.data) as T;
      this.handler?.onMessage(data);
    };
    this.dc.onopen = () => this.handler?.onOpen?.();
    this.dc.onerror = (event) => console.error('Data channel error:', event);
  }

  withHandler<T = any>(handler: ConnectionHandler<T>): PeerConnection<T> {
    this.handler = handler as unknown as ConnectionHandler<any>;
    return this as unknown as PeerConnection<T>;
  }

  async open() {
    if (this.isInitiator) {
      const offer = await this.pc.createOffer();
      await this.pc.setLocalDescription(offer);

      await this.channel.send(offer as PeerMessage);
    }

    this.pc.onicecandidate = async (event) => {
      if (!event.candidate) {
        return;
      }

      const candidate = event.candidate.toJSON();

      await this.channel.send(candidate as PeerMessage);
    };

    const schedule = () => this.scheduleClose(undefined);
    const cancel = () => this.cancelScheduledClose();

    this.pc.onconnectionstatechange = () => {
      switch (this.pc.connectionState) {
        case 'connected':
          cancel();
          break;
        case 'disconnected':
        case 'failed':
          schedule();
          break;
        case 'closed':
          // already closed
          break;
      }
    };

    this.pc.oniceconnectionstatechange = () => {
      const s = this.pc.iceConnectionState;
      if (s === 'disconnected' || s === 'failed') schedule();
      if (s === 'connected' || s === 'completed') cancel();
    };

    this.unsubscribeSignal = this.channel.subscribe(async (message) => {
      await this.receiveMessage(message);
    });
  }

  close() {
    console.debug('Closing peer connection for peer', this.peerId);

    this.cancelScheduledClose();
    try {
      this.unsubscribeSignal?.();
    } catch (e) {
      console.error('Failed to unsubscribe from signal channel for peer', this.peerId, e);
    }

    this.pendingRemoteCandidates = [];

    try {
      this.dc.close();
    } catch (e) {
      console.error('Failed to close data channel for peer', this.peerId, e);
    }

    try {
      this.pc.getSenders().forEach((sender) => {
        try {
          sender.track?.stop();
        } catch (e) {
          console.error('Failed to stop sender track for peer', this.peerId, e);
        }
      });
      this.pc.getReceivers().forEach((receiver) => {
        try {
          receiver.track.stop();
        } catch (e) {
          console.error('Failed to stop receiver track for peer', this.peerId, e);
        }
      });
    } catch (e) {
      console.error('Failed to stop tracks for peer', this.peerId, e);
    }

    try {
      this.pc.close();
    } catch (e) {
      console.error('Failed to close peer connection for peer', this.peerId, e);
    }

    this.handler?.onClosed?.();
  }

  scheduleClose(needCancel?: () => boolean) {
    if (this._closeTimer) {
      return;
    }

    this._closeTimer = window.setTimeout(() => {
      this._closeTimer = undefined;
      if (needCancel && needCancel()) {
        return;
      }
      this.close();
    }, this.graceMs);
  }

  cancelScheduledClose() {
    if (!this._closeTimer) {
      return;
    }
    window.clearTimeout(this._closeTimer);
    this._closeTimer = undefined;
  }

  send(data: T) {
    if (this.dc.readyState !== 'open') {
      throw new Error('Data channel is not open');
    }

    // Prevent flooding the data channel buffer
    if (this.dc.bufferedAmount > 1_000_000) {
      console.warn('Data channel buffered amount is too high, dropping message');
      throw new Error('Data channel buffered amount is too high');
    }

    this.dc.send(typeof data === 'string' ? data : JSON.stringify(data));
  }

  trySend(data: T): boolean {
    try {
      this.send(data);
      return true;
    } catch (e) {
      console.error('Failed to send data channel for peer', this.peerId, e);
      return false;
    }
  }

  private async receiveMessage(message: PeerMessage) {
    switch (true) {
      case 'type' in message && message.type === 'offer':
        await this.receiveOffer(message);
        break;
      case 'type' in message && message.type === 'answer':
        await this.receiveAnswer(message);
        break;
      case 'candidate' in message:
        await this.receiveIceCandidate(message);
        break;
      default:
        console.warn('Unknown peer message type:', message);
    }
  }

  private async receiveOffer(offer: RTCSessionDescriptionInit) {
    try {
      switch (this.pc.signalingState) {
        case 'have-local-offer':
        case 'stable': {
          if (this.pc.signalingState === 'have-local-offer') {
            await this.pc.setLocalDescription({ type: 'rollback' });
          }
          await this.pc.setRemoteDescription(new RTCSessionDescription(offer));
          await this.flushPendingCandidates();
          const answer = await this.pc.createAnswer();
          await this.pc.setLocalDescription(answer);
          await this.channel.send(answer as PeerMessage);
          break;
        }
        default:
          console.warn('Unexpected signaling state on offer reception:', this.pc.signalingState);
      }
    } catch (e) {
      console.error('Error handling received offer:', e);
    }
  }

  private async receiveAnswer(answer: RTCSessionDescriptionInit) {
    try {
      switch (this.pc.signalingState) {
        case 'have-local-offer':
          await this.pc.setRemoteDescription(new RTCSessionDescription(answer));
          await this.flushPendingCandidates();
          break;
        default:
          console.warn('Unexpected signaling state on answer reception:', this.pc.signalingState);
      }
    } catch (e) {
      console.error('Error handling received answer:', e);
    }
  }

  private async receiveIceCandidate(candidate: RTCIceCandidateInit) {
    try {
      if (!this.pc.remoteDescription) {
        this.pendingRemoteCandidates.push(candidate);
        return;
      }
      await this.pc.addIceCandidate(new RTCIceCandidate(candidate));
    } catch (e) {
      console.error('Error adding received ICE candidate:', e);
    }
  }

  private async flushPendingCandidates() {
    if (!this.pendingRemoteCandidates.length) {
      return;
    }

    const queue = this.pendingRemoteCandidates.splice(0);
    for (const c of queue) {
      try {
        await this.pc.addIceCandidate(new RTCIceCandidate(c));
      } catch (e) {
        console.error('Error adding pending ICE candidate:', e);
      }
    }
  }
}
