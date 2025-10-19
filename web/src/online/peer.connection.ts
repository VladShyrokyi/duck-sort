/* eslint-disable @typescript-eslint/no-explicit-any */

import { SignalChannel } from './signal.channel';
import { delayedInterval, throttle } from '../utils/timers';

export type PeerMessage =
  | ({ type: 'offer' } & RTCSessionDescriptionInit)
  | ({ type: 'answer' } & RTCSessionDescriptionInit)
  | ({ candidate: string } & RTCIceCandidateInit);

export interface ConnectionHandler<T extends Record<string, any>> {
  onOpen?(): void;
  onMessage(data: T): void;
  onClosed?(): void;
}

enum PeerConnectionChannel {
  GAME = 'game',
}

export class PeerConnection<T extends Record<string, any> = Record<string, any>> {
  private readonly pc: RTCPeerConnection;
  private dc?: RTCDataChannel;
  private pendingRemoteCandidates: RTCIceCandidateInit[] = [];
  private unsubscribeSignal?: () => void;

  private _closeTimer?: number;
  private _isReady = false;

  constructor(
    private readonly channel: SignalChannel<PeerMessage>,
    private handler?: ConnectionHandler<T>,
    private readonly options?: {
      openTimeoutMs?: number;
      waitingDcTimeoutMs?: number;
      graceMs?: number;
      logStatsIntervalMs?: number;
      logStatsDelayMs?: number;
      logMessagesThrottleMs?: number;
      bufferedAmountLowThreshold?: number;
    },
  ) {
    this.options = {
      openTimeoutMs: 20_000,
      waitingDcTimeoutMs: 5_000,
      graceMs: 10_000,
      logStatsIntervalMs: 1_000,
      logStatsDelayMs: 5_000,
      logMessagesThrottleMs: 1_000,
      bufferedAmountLowThreshold: 1_000_000,
      ...this.options,
    };
    this.pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });
  }

  get isReady() {
    return this._isReady;
  }

  withHandler<T extends Record<string, any> = Record<string, any>>(handler: ConnectionHandler<T>): PeerConnection<T> {
    this.handler = handler as unknown as ConnectionHandler<any>;
    return this as unknown as PeerConnection<T>;
  }

  async open(isInitiator: boolean) {
    this.unsubscribeSignal = this.channel.subscribe(async (message) => {
      await this.receiveMessage(message);
    });

    this.pc.onicecandidate = async (event) => {
      if (!event.candidate) {
        return;
      }

      const candidate = event.candidate.toJSON();

      await this.channel.send(candidate as PeerMessage);
    };

    const schedule = () =>
      this.scheduleClose(() => this.pc.connectionState === 'connected' || this.pc.iceConnectionState === 'connected');
    const cancel = () => this.cancelScheduledClose();
    const lifecycle = (status: string) => {
      console.debug('Peer connection', status, 'for peer', this.channel.id);

      if (status === 'disconnected' || status === 'failed') {
        schedule();
      } else if (status === 'connected' || status === 'completed') {
        cancel();
      }
    };

    this.pc.onconnectionstatechange = () => lifecycle(this.pc.connectionState);
    this.pc.oniceconnectionstatechange = () => lifecycle(this.pc.iceConnectionState);

    this.dc = isInitiator
      ? this.pc.createDataChannel(PeerConnectionChannel.GAME, { ordered: false, maxRetransmits: 0 })
      : await this.waitForDataChannel(this.pc, PeerConnectionChannel.GAME, this.options?.waitingDcTimeoutMs);
    this.wideDataChannel(this.dc);

    if (isInitiator) {
      await this.initializeConnection();
    }

    const cancelLogging = delayedInterval(
      () => {
        console.warn('Peer connection not established yet for peer', this.channel.id);
        this.logStats();
      },
      this.options!.logStatsDelayMs!,
      this.options!.logStatsIntervalMs!,
    );

    try {
      await this.waitForReady(this.options?.openTimeoutMs);
      console.debug('Peer connection established for peer', this.channel.id);
      this._isReady = true;
    } catch (e) {
      console.error('Failed to establish peer connection for peer', this.channel.id, e);
      await this.logStats();
      this.close();
    } finally {
      cancelLogging();
    }
  }

  close() {
    console.debug('Closing peer connection for peer', this.channel.id);

    this.cancelScheduledClose();
    try {
      this.unsubscribeSignal?.();
    } catch (e) {
      console.error('Failed to unsubscribe from signal channel for peer', this.channel.id, e);
    }

    this.pendingRemoteCandidates = [];

    try {
      this.dc?.close();
    } catch (e) {
      console.error('Failed to close data channel for peer', this.channel.id, e);
    }

    try {
      this.pc.getSenders().forEach((sender) => {
        try {
          sender.track?.stop();
        } catch (e) {
          console.error('Failed to stop sender track for peer', this.channel.id, e);
        }
      });
      this.pc.getReceivers().forEach((receiver) => {
        try {
          receiver.track.stop();
        } catch (e) {
          console.error('Failed to stop receiver track for peer', this.channel.id, e);
        }
      });
    } catch (e) {
      console.error('Failed to stop tracks for peer', this.channel.id, e);
    }

    try {
      this.pc.close();
    } catch (e) {
      console.error('Failed to close peer connection for peer', this.channel.id, e);
    }

    this.handler?.onClosed?.();
  }

  scheduleClose(needCancel?: () => boolean) {
    if (this._closeTimer) {
      return;
    }

    console.debug('Scheduling peer connection close in', this.options!.graceMs, 'ms for peer', this.channel.id);

    this._closeTimer = window.setTimeout(() => {
      this._closeTimer = undefined;
      if (needCancel && needCancel()) {
        return;
      }
      console.debug('Closing peer connection after grace period for peer', this.channel.id);
      this.close();
    }, this.options!.graceMs);
  }

  cancelScheduledClose() {
    if (!this._closeTimer) {
      return;
    }
    window.clearTimeout(this._closeTimer);
    this._closeTimer = undefined;
  }

  send(data: T) {
    if (this.dc?.readyState !== 'open') {
      throw new Error('Data channel is not open');
    }

    // Prevent flooding the data channel buffer
    if (this.dc.bufferedAmount > this.options!.bufferedAmountLowThreshold!) {
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
      console.error('Failed to send data channel for peer', this.channel.id, e);
      return false;
    }
  }

  private async waitForReady(timeoutMs = 20_000) {
    if (this.dc?.readyState === 'open') {
      return;
    }

    return new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('DC open timeout')), timeoutMs);
      const done = () => {
        clearTimeout(t);
        cleanup();
        resolve(null);
      };
      const fail = (e?: any) => {
        clearTimeout(t);
        cleanup();
        reject(e ?? new Error('DC failed'));
      };

      const onOpen = () => {
        if (this.pc.iceConnectionState === 'connected' || this.pc.iceConnectionState === 'completed') done();
      };
      const onConn = () => {
        if (
          this.dc?.readyState === 'open' &&
          (this.pc.iceConnectionState === 'connected' || this.pc.iceConnectionState === 'completed')
        )
          done();
      };
      const onFail = () => fail(new Error('ICE failed/disconnected'));

      const cleanup = () => {
        this.dc?.removeEventListener('open', onOpen);
        this.pc.removeEventListener('iceconnectionstatechange', onConn);
        this.pc.removeEventListener('connectionstatechange', onConn);
        this.pc.removeEventListener('iceconnectionstatechange', onFail);
      };

      this.dc?.addEventListener('open', onOpen);
      this.pc.addEventListener('iceconnectionstatechange', onConn);
      this.pc.addEventListener('connectionstatechange', onConn);
      this.pc.addEventListener('iceconnectionstatechange', () => {
        const s = this.pc.iceConnectionState;
        if (s === 'failed' || s === 'disconnected') onFail();
      });
    });
  }

  private waitForDataChannel(pc: RTCPeerConnection, label: string, timeoutMs = 20000) {
    console.debug('Waiting for data channel for peer', this.channel.id);

    return new Promise<RTCDataChannel>((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('Data channel timeout')), timeoutMs);

      const onDataChannel = (event: RTCDataChannelEvent) => {
        console.debug('Data channel event received:', event.channel.label);

        if (event.channel.label !== label) {
          return;
        }
        clearTimeout(t);
        pc.removeEventListener('datachannel', onDataChannel);
        resolve(event.channel);
      };

      pc.addEventListener('datachannel', onDataChannel);
    });
  }

  private wideDataChannel(dc: RTCDataChannel) {
    const logMessageThrottled = throttle((data: T) => {
      console.debug('Received data channel message from peer', this.channel.id, data);
    }, this.options!.logMessagesThrottleMs!);

    dc.onmessage = (ev) => {
      const data = (typeof ev.data === 'string' ? JSON.parse(ev.data) : ev.data) as T;
      logMessageThrottled(data);
      this.handler?.onMessage(data);
    };
    dc.onopen = () => {
      this._isReady = true;
      this.handler?.onOpen?.();
    };
    dc.onerror = (ev) => {
      console.error('Data channel error:', ev);
    };
  }

  private async initializeConnection() {
    console.debug('Creating offer for peer', this.channel.id);
    const offer = await this.pc.createOffer();
    await this.pc.setLocalDescription(offer);

    console.debug('Sending offer to peer', this.channel.id);
    await this.channel.send(offer as PeerMessage);
    console.debug('Offer sent to peer', this.channel.id);
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
            console.debug('Rolling back local offer before setting new remote offer');
            await this.pc.setLocalDescription({ type: 'rollback' });
          }

          console.debug('Received offer, setting remote description and creating answer');
          await this.pc.setRemoteDescription(new RTCSessionDescription(offer));
          console.debug('Remote description set, flushing pending ICE candidates');
          await this.flushPendingCandidates();

          console.debug('Creating and sending answer');
          const answer = await this.pc.createAnswer();
          await this.pc.setLocalDescription(answer);
          await this.channel.send(answer as PeerMessage);
          console.debug('Answer sent');
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
      if (this.pc.signalingState !== 'have-local-offer') {
        console.warn('Unexpected signaling state on answer reception:', this.pc.signalingState);
        return;
      }
      console.debug('Received answer, setting remote description');
      await this.pc.setRemoteDescription(new RTCSessionDescription(answer));
      console.debug('Remote description set, flushing pending ICE candidates');
      await this.flushPendingCandidates();
      console.debug('Answer processed');
    } catch (e) {
      console.error('Error handling received answer:', e);
    }
  }

  private async receiveIceCandidate(candidate: RTCIceCandidateInit) {
    try {
      if (!this.pc.remoteDescription) {
        console.debug('Remote description not set yet, queuing ICE candidate');
        this.pendingRemoteCandidates.push(candidate);
        return;
      }
      console.debug('Adding received ICE candidate');
      await this.pc.addIceCandidate(new RTCIceCandidate(candidate));
      console.debug('ICE candidate added');
    } catch (e) {
      console.error('Error adding received ICE candidate:', e);
    }
  }

  private async flushPendingCandidates() {
    if (!this.pendingRemoteCandidates.length) {
      return;
    }

    const queue = this.pendingRemoteCandidates.splice(0);
    console.debug('Flushing', queue.length, 'pending ICE candidates');
    for (const c of queue) {
      try {
        await this.pc.addIceCandidate(new RTCIceCandidate(c));
      } catch (e) {
        console.error('Error adding pending ICE candidate:', e);
      }
    }
    console.debug('Finished flushing pending ICE candidates');
  }

  private async logStats() {
    const s = await this.pc.getStats();
    let pair: any, sctp: any;
    s.forEach((r) => {
      if (r.type === 'candidate-pair' && r.nominated) pair = r;
      if (r.type === 'sctp-transport') sctp = r;
    });
    console.table({
      ice: this.pc.iceConnectionState,
      conn: this.pc.connectionState,
      pair: pair?.state,
      sctp: sctp?.state,
      dc: this.dc?.readyState,
      buf: this.dc?.bufferedAmount,
    });
  }
}
