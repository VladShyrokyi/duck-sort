import { onAuthStateChanged, signInAnonymously, Auth } from 'firebase/auth';
import { Database } from 'firebase/database';
import { FirebaseRoomSession } from './firebase/firebase.room.session';
import { PeerConnection } from './peer.connection';
import { FirebaseSignalChannel } from './firebase/firebase.signal.channel';
import { netConfig } from './net.config';

export type Vec = { x: number; y: number };

export interface DuckData {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  a?: number; // angle
  av?: number; // angular velocity
}

export interface CursorData {
  x: number;
  y: number;
}

export interface RemoteHandler {
  onUpdateRemoteCursor: (playerId: string, pos: Vec) => void;
  onPlayerJoin?: (playerId: string) => void;
  onPlayerLeave?: (playerId: string) => void;

  getDucks?: () => DuckData[];
  receiveDucks?: (batch: { tHost: number; snaps: DuckData[] }) => void;
  onHostChange?: (hostId: string | null, isSelf: boolean) => void;
  onRoomStateChange?: (
    state: {
      status: 'idle' | 'active' | 'finished';
      winnerTimeMs?: number;
    } | null,
  ) => void;
}

export class Multiplayer {
  private readonly peers = new Map<string, PeerConnection>();

  private _userId: string | null = null;
  private _session: FirebaseRoomSession | null = null;
  private hostId: string | null = null;

  private lastCursorAt = 0;
  private lastDucksAt = 0;
  private lastSignalsCleanupAt = 0;

  constructor(
    private readonly rtdb: Database,
    private readonly auth: Auth,
    private readonly roomId: string,
    private readonly remoteHandler: RemoteHandler,
    private readonly throttleDucksMs: number = Math.floor(1000 / netConfig.sendHz),
    private readonly throttleCursorMs: number = 50, // ~20 Hz target
    private readonly cleanupIntervalMs: number = 5000,
    private readonly staleSignalMs: number = 30_000,
  ) {}

  get userId() {
    return this._userId;
  }

  get isHost() {
    return this.hostId === this.userId;
  }

  async init() {
    await this.authorize();

    if (!this._userId) throw new Error('Failed to authenticate');

    this._session = new FirebaseRoomSession(this.rtdb);

    await this._session.start(this.roomId, this._userId);

    await this.electNewHostIfNeeded(await this._session.getOnlinePeers(), await this._session.getHostId(), true);

    this._session.subscribeCursors((cursors) => {
      for (const [pid, pos] of Object.entries(cursors)) {
        if (pid === this._userId) continue;
        if (!this.peers.has(pid)) {
          console.warn('Ignoring cursor update from unknown peer', pid);
          continue;
        }
        this.remoteHandler.onUpdateRemoteCursor(pid, pos);
      }
    });
    this._session.subscribeState((state) => this.remoteHandler.onRoomStateChange?.(state));
    this._session.subscribeHostId((hostId) => {
      if (hostId === this.hostId) {
        return;
      }
      this.hostId = hostId;
      this.remoteHandler.onHostChange?.(hostId, this.isHost);
    });
    this._session.subscribePeers((peers) => {
      console.debug('Detected peers update: ', peers);

      if (!peers.length) {
        console.warn('No peers online in the room. This should not happen as we are online ourselves.');
      }

      this.electNewHostIfNeeded(peers, this.hostId);

      peers.forEach((peer) => {
        if (peer === this._userId) {
          return;
        }

        if (this.peers.has(peer)) {
          return;
        }

        console.debug('Detected new peer: ', peer);
        this.connectToPeer(peer);
        this.remoteHandler.onPlayerJoin?.(peer);
      });

      this.peers.forEach((_, peer) => {
        if (peers.includes(peer)) {
          return;
        }

        console.debug('Detected peer leave: ', peer);
        this.closePeer(peer);
        this.remoteHandler.onPlayerLeave?.(peer);
      });

      this.cleanupPeers(peers);
    });

    setInterval(() => {
      if (!this.isHost) {
        return;
      }
      this.publishDucks();
    }, this.throttleDucksMs);

    setInterval(async () => {
      if (!this._session) {
        return;
      }
      const peers = await this._session.getOnlinePeers();
      await this.cleanupPeers(peers);
    }, this.cleanupIntervalMs);

    setInterval(async () => {
      if (!this._session) {
        return;
      }
      await this._session.pruneStaleSignals(this.staleSignalMs);
    }, this.staleSignalMs);
  }

  async authorize() {
    await signInAnonymously(this.auth);
    this._userId = await new Promise<string>((resolve, reject) => {
      const unsub = onAuthStateChanged(
        this.auth,
        (user) => {
          if (user) {
            resolve(user.uid);
            unsub();
          }
        },
        (err) => {
          reject(err);
          unsub();
        },
      );
    });

    console.debug('Signed in as', this._userId);
  }

  async publishCursor(pos: Vec) {
    if (!this._userId) return;
    const now = performance.now();
    const period = this.throttleCursorMs; // 20 Hz target

    if (now - this.lastCursorAt < period) {
      return;
    }

    this.lastCursorAt = now;

    try {
      await this._session?.updateCursor(pos.x, pos.y);
    } catch (e) {
      console.error('Failed to publish cursor position', e);
    }
  }

  async publishDucks() {
    if (!this._userId || !this.isHost || !this.remoteHandler.getDucks) {
      return;
    }

    const now = performance.now();
    const period = this.throttleDucksMs;
    if (now - this.lastDucksAt < period) return;
    this.lastDucksAt = now;
    const snaps = this.remoteHandler.getDucks();

    // Send directly over data channels to all peers for lowest latency
    const tHost = performance.now();
    const payload = JSON.stringify({ type: 'ducks', tHost, snaps });
    this.peers.forEach((peer) => {
      if (!peer.isReady) {
        return;
      }
      peer.trySend(payload);
    });
  }

  async cleanup() {
    try {
      await this._session?.dispose();
    } catch (e) {
      console.error('Failed to clean up player presence', e);
    }
  }

  async setRoomActive() {
    if (!this.isHost || !this._session) {
      return;
    }

    await this._session.updateStateToActive();
  }

  async setRoomFinished(winnerTimeMs: number) {
    if (!this.isHost || !this._session) {
      return;
    }

    await this._session.updateStateToFinished(winnerTimeMs);
  }

  async resetRoomToIdle() {
    if (!this.isHost || !this._session) {
      return;
    }

    await this._session.updateStateToIdle();
  }

  private async electNewHostIfNeeded(peers: string[], hostId?: string | null, isInitial = false) {
    if (!this._userId || !this._session) {
      return;
    }

    if (!!hostId && peers.includes(hostId)) {
      return;
    }

    const nextHostId = peers.length ? [...peers].sort()[0] : this._userId;
    if (nextHostId === this._userId) {
      console.debug('Becoming the new host for the room');
      await this._session.updateHostId(this._userId);
      console.debug('Updated room hostId to self:', this._userId);
      if (!hostId) {
        // Newly created room; set createdAt
        try {
          await this._session.saveCreatedAt();
        } catch (e) {
          console.error('Failed to set createdAt for new room. Maybe simultaneous creation?', e);
        }
      }
    }
    this.hostId = nextHostId;
    if (isInitial) {
      return;
    }
    this.remoteHandler.onHostChange?.(this.hostId, this.isHost);
  }

  private async connectToPeer(peerId: string) {
    if (!this._userId || !this._session) return;

    const peer = new PeerConnection(new FirebaseSignalChannel(this._session, peerId, this.staleSignalMs), {
      onOpen: async () => {
        console.debug('Peer connection opened with', peerId);
        if (this.isHost) {
          this._session?.pruneChannelsFor(peerId);
        }
      },
      onMessage: async (data) => this.onMessage(peerId, data),
      onClosed: async () => this.peers.delete(peerId),
    });

    const isInitiator = this._userId === this.hostId;
    console.debug('Connecting to Peer ', { peerId, isInitiator, hostId: this.hostId });

    await peer.open(isInitiator);

    this.peers.set(peerId, peer);
  }

  private async closePeer(peerId: string) {
    const pc = this.peers.get(peerId);

    try {
      pc?.close();
    } catch (e) {
      console.error('Failed to close peer connection for peer', peerId, e);
    }

    this.peers.delete(peerId);
    // TODO: clean up signaling?
    //   subscriptions will be removed when presence is gone
  }

  private onMessage(peerId: string, data: any) {
    try {
      const msg = typeof data === 'string' ? JSON.parse(data) : data;
      if (msg.type === 'ducks' && this.remoteHandler.receiveDucks) {
        if (typeof msg.tHost === 'number') {
          this.remoteHandler.receiveDucks({ tHost: msg.tHost as number, snaps: msg.snaps as DuckData[] });
        } else {
          this.remoteHandler.receiveDucks({ tHost: performance.now(), snaps: msg.snaps as DuckData[] });
        }
      } else if (msg.type === 'cursor') {
        const { x, y } = msg as CursorData & { type: 'cursor' };
        this.remoteHandler.onUpdateRemoteCursor(peerId, { x, y });
      }
    } catch {
      console.warn('Failed to parse RTC data channel message', data);
    }
  }

  private async cleanupPeers(online: string[]) {
    if (!this._session || !this.isHost) {
      return;
    }

    const now = performance.now();
    if (!this.lastSignalsCleanupAt && now - this.lastSignalsCleanupAt <= this.cleanupIntervalMs) {
      return;
    }

    try {
      await this._session.pruneChannelsForOffline(online);
      this.lastSignalsCleanupAt = now;
    } catch (e) {
      console.error('Failed to cleanup peers signaling', e);
    }
  }
}
