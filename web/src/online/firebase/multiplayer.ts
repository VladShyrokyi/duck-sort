import { onAuthStateChanged, signInAnonymously, Auth } from 'firebase/auth';
import {
  ref,
  set,
  onDisconnect,
  onValue,
  update,
  push,
  child,
  remove,
  Database,
  runTransaction,
  get,
} from 'firebase/database';

export type Vec = { x: number; y: number };

export interface DuckData {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface RoomData {
  hostId: string;
  createdAt: Date;
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
  receiveDucks?: (snaps: DuckData[]) => void;
  onHostChange?: (hostId: string | null, isSelf: boolean) => void;
}

export class Multiplayer {
  private uid: string | null = null;
  private _isHost = false;

  // signaling / presence
  private readonly roomPath: string;
  private readonly peersPath: string;
  private readonly cursorsPath: string;
  // ducksPath reserved; currently ducks are sent via RTC data channels directly.
  // private readonly ducksPath: string;

  // rtc
  private peers = new Map<string, RTCPeerConnection>();
  private dataChannels = new Map<string, RTCDataChannel>();
  private iceServers: RTCIceServer[] = [{ urls: 'stun:stun.l.google.com:19302' }];
  private currentHostId: string | null = null;

  // throttling
  private lastCursorAt = 0;
  private lastDucksAt = 0;
  private lastOutboxCleanupAt = 0;
  private lastInboxCleanupAt = 0;
  private lastSignalsCleanupAt = 0;

  constructor(
    private readonly rtdb: Database,
    private readonly auth: Auth,
    private readonly roomId: string,
    private readonly remoteHandler: RemoteHandler,
    private readonly throttleDucksMs: number = 100, // ~10 Hz default
    private readonly throttleCursorMs: number = 50, // ~20 Hz target
  ) {
    this.roomPath = `rooms/${this.roomId}`;
    this.peersPath = `${this.roomPath}/peers`;
    this.cursorsPath = `${this.roomPath}/cursors`;
    // this.ducksPath = `${this.roomPath}/ducks`;
  }

  get userId() {
    return this.uid;
  }

  get isHost() {
    return this._isHost;
  }

  async init() {
    await this.authorize();

    if (!this.uid) throw new Error('Failed to authenticate');

    // Host election: first writer wins via transaction
    const hostIdRef = ref(this.rtdb, `${this.roomPath}/hostId`);
    const createdAtRef = ref(this.rtdb, `${this.roomPath}/createdAt`);
    try {
      const hostIdSnapshot = await get(hostIdRef);
      const hostId = hostIdSnapshot.val() as string | null;
      if (!hostId) {
        await set(hostIdRef, this.uid);
        await set(createdAtRef, Date.now());
      }
      this.currentHostId = hostId ?? null;

      // Track hostId changes and reflect locally + presence
      onValue(hostIdRef, async (snap) => {
        const newHostId = (snap.val() as string | null) ?? null;
        const wasHost = this._isHost;
        this.currentHostId = newHostId;
        this._isHost = newHostId === this.uid;
        if (this.uid && wasHost !== this._isHost) {
          try {
            await update(meRef, { isHost: this._isHost });
          } catch {
            console.error('Failed to update host status in presence');
          }
        }
        this.remoteHandler.onHostChange?.(newHostId, this._isHost);
      });
    } catch (e) {
      throw new Error('Failed to establish host: ' + (e as Error).message);
    }

    this._isHost = this.currentHostId === this.uid;

    // Presence in peers
    const meRef = ref(this.rtdb, `${this.peersPath}/${this.uid}`);
    await set(meRef, { joinedAt: Date.now(), isHost: this._isHost });
    onDisconnect(meRef)
      .remove()
      .catch((err) => {
        console.warn('Failed to set onDisconnect(remove) for peer presence', err);
      });

    const cursorRef = ref(this.rtdb, `${this.cursorsPath}/${this.uid}`);
    onDisconnect(cursorRef)
      .remove()
      .catch((err) => {
        console.warn('Failed to set onDisconnect(remove) for cursor presence', err);
      });

    // Ensure our signaling outbox is cleaned up on abrupt disconnect
    const outboxRef = ref(this.rtdb, `${this.roomPath}/signals/${this.uid}`);
    onDisconnect(outboxRef)
      .remove()
      .catch((err) => {
        console.warn('Failed to set onDisconnect(remove) for signaling outbox', err);
      });

    // Subscribe to cursors from RTDB for minimap/wolves
    onValue(ref(this.rtdb, this.cursorsPath), (snap) => {
      const all = (snap.val() || {}) as Record<string, CursorData>;
      Object.entries(all).forEach(([pid, data]) => {
        if (pid === this.uid) return;
        if (data && typeof (data as any).x === 'number' && typeof (data as any).y === 'number') {
          this.remoteHandler.onUpdateRemoteCursor(pid, { x: data.x, y: data.y });
          this.remoteHandler.onPlayerJoin?.(pid);
        }
      });
    });

    // WebRTC mesh: create connections to existing peers and handle newcomers
    try {
      const peersRef = ref(this.rtdb, this.peersPath);
      // const peers = await get(peersRef);

      onValue(peersRef, async (snap) => {
        const peers: Record<string, any> = snap.val() || {};
        const online = Object.keys(peers);

        console.debug('Current online peers: ', online);

        // Connect to any new peers
        online.forEach((pid) => {
          if (pid === this.uid) return;
          if (!this.peers.has(pid)) this.connectToPeer(pid);
        });
        // Clean up our outbox entries to peers that are offline
        const now = performance.now();
        if (this.uid && (now - this.lastOutboxCleanupAt > 2000 || this.lastOutboxCleanupAt === 0)) {
          try {
            await this.cleanupOutboxToOfflinePeers(online);
          } catch (e) {
            console.warn('Failed to cleanup signaling outbox', e);
          }
          this.lastOutboxCleanupAt = now;
          console.debug('Completed outbox cleanup at', now);
        } else {
          console.debug('Skipping outbox cleanup; last done at', this.lastOutboxCleanupAt, 'now', now);
        }

        // Clean up our inbox (signals from offline senders to me)
        if (this.uid && (now - this.lastInboxCleanupAt > 2000 || this.lastInboxCleanupAt === 0)) {
          try {
            await this.cleanupInboxFromOfflinePeers(online);
          } catch (e) {
            console.warn('Failed to cleanup signaling inbox', e);
          }
          this.lastInboxCleanupAt = now;
        }
        // Host re-election: if current host is missing, elect smallest uid
        const hasHost = this.currentHostId ? online.includes(this.currentHostId) : false;
        if (!hasHost && online.length > 0) {
          const candidate = [...online].sort()[0];
          try {
            await runTransaction(ref(this.rtdb, `${this.roomPath}/hostId`), (current) => {
              if (!current || !online.includes(current as string)) {
                return candidate;
              }
              return current;
            });
          } catch (e) {
            console.error('Failed to elect new host: ', e);
          }
        }

        // Global pruning of /signals for completely stale branches (host-only)
        const now2 = performance.now();
        if (this._isHost && (now2 - this.lastSignalsCleanupAt > 5000 || this.lastSignalsCleanupAt === 0)) {
          try {
            await this.cleanupGlobalSignalsForOffline(online);
          } catch (e) {
            console.warn('Failed to cleanup global signals', e);
          }
          this.lastSignalsCleanupAt = now2;
        }
      });
    } catch (e) {}

    return { uid: this.uid, isHost: this._isHost } as const;
  }

  async authorize() {
    await signInAnonymously(this.auth);
    this.uid = await new Promise<string>((resolve, reject) => {
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

    console.debug('Signed in as', this.uid);
  }

  private async connectToPeer(peerId: string) {
    if (!this.uid) return;

    console.debug('Connecting to Peer ', peerId);
    const pc = new RTCPeerConnection({ iceServers: this.iceServers });
    this.peers.set(peerId, pc);

    // Data channel (deterministic label ordering to avoid glare)
    const initiator = this.uid < peerId;
    let dc: RTCDataChannel;
    if (initiator) {
      dc = pc.createDataChannel('game');
      this.hookDataChannel(peerId, dc);
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      await this.signal(peerId, offer);
    } else {
      pc.ondatachannel = (ev) => this.hookDataChannel(peerId, ev.channel);
    }

    pc.onicecandidate = (e) => {
      if (e.candidate) this.signal(peerId, e.candidate.toJSON());
    };

    // Listen for signaling messages
    onValue(ref(this.rtdb, `${this.roomPath}/signals/${peerId}/${this.uid}`), async (snap) => {
      type SignalMsg =
        | (RTCSessionDescriptionInit & { type: 'offer' | 'answer'; t?: number })
        | (RTCIceCandidateInit & { candidate: string; t?: number });
      const msgs = snap.val() as Record<string, SignalMsg> | null;
      if (!msgs) return;
      const handledKeys: string[] = [];
      const STALE_MS = 30_000;
      const now = Date.now();
      for (const [key, msg] of Object.entries(msgs)) {
        const m: any = msg;
        if (typeof m.t === 'number' && now - m.t > STALE_MS) {
          // stale message; drop
          handledKeys.push(key);
          continue;
        }
        if (m.type === 'offer' && !initiator) {
          try {
            if (pc.signalingState === 'have-local-offer') {
              // Attempt rollback before applying remote offer
              await (pc as any).setLocalDescription({ type: 'rollback' });
            }
            if (pc.signalingState === 'stable') {
              await pc.setRemoteDescription(new RTCSessionDescription(msg as RTCSessionDescriptionInit));
              const answer = await pc.createAnswer();
              await pc.setLocalDescription(answer);
              await this.signal(peerId, answer, key);
            } else {
              // If not stable after rollback, ignore this offer as it's likely duplicate
            }
          } catch (e) {
            console.warn('Failed handling remote offer', e, 'state=', pc.signalingState);
          }
          handledKeys.push(key);
        } else if (m.type === 'answer' && initiator) {
          try {
            if (pc.signalingState === 'have-local-offer') {
              await pc.setRemoteDescription(new RTCSessionDescription(msg as RTCSessionDescriptionInit));
            } else {
              // Already in stable or wrong state; treat as duplicate
            }
          } catch (e) {
            console.warn('Failed handling remote answer', e, 'state=', pc.signalingState);
          }
          handledKeys.push(key);
        } else if (m.candidate) {
          try {
            await pc.addIceCandidate(new RTCIceCandidate(msg as RTCIceCandidateInit));
          } catch {
            console.warn('Failed to add ICE candidate', msg);
          }
          handledKeys.push(key);
        }
      }
      if (handledKeys.length) {
        const removeUpdates: Record<string, null> = {};
        handledKeys.forEach((k) => (removeUpdates[k] = null));
        await update(ref(this.rtdb, `${this.roomPath}/signals/${peerId}/${this.uid}`), removeUpdates);
      }
    });
  }

  private hookDataChannel(peerId: string, dc: RTCDataChannel) {
    this.dataChannels.set(peerId, dc);
    dc.onmessage = (ev) => this.onMessage(peerId, ev.data);
    dc.onopen = async () => {
      // Proactively clean signaling for this link on both directions
      try {
        if (this.uid) {
          await remove(ref(this.rtdb, `${this.roomPath}/signals/${this.uid}/${peerId}`));
          await remove(ref(this.rtdb, `${this.roomPath}/signals/${peerId}/${this.uid}`));
        }
      } catch {
        console.error('Failed to clean signaling for peer', peerId);
      }
    };
    dc.onclose = () => {
      this.dataChannels.delete(peerId);
    };
  }

  private async signal(peerId: string, payload: any, key?: string) {
    const path = `${this.roomPath}/signals/${this.uid}/${peerId}`;
    const bagRef = ref(this.rtdb, path);
    const entryRef = key ? child(bagRef, key) : push(bagRef);
    await set(entryRef, { ...payload, t: Date.now() });
  }

  private async cleanupOutboxToOfflinePeers(online: string[]) {
    if (!this.uid) return;
    const outboxRef = ref(this.rtdb, `${this.roomPath}/signals/${this.uid}`);
    const snap = await get(outboxRef);
    if (!snap.exists()) return;
    console.debug('Cleaning up signaling outbox to offline peers ', {
      online,
      offline: Object.keys(snap.val() || {}).filter((pid) => !online.includes(pid)),
    });
    const entries = snap.val() as Record<string, any>;
    const removes: Array<Promise<void>> = [];
    Object.keys(entries).forEach((peerId) => {
      if (!online.includes(peerId)) {
        console.debug('Removing outbox entries to offline peer', peerId);
        removes.push(remove(child(outboxRef, peerId)));
      }
    });
    try {
      await Promise.all(removes);
    } catch (e) {
      console.warn('Failed to cleanup some offline peer outbox entries', e);
    }
  }

  private async cleanupInboxFromOfflinePeers(online: string[]) {
    if (!this.uid) return;
    // Scan inbound signals addressed to me: signals/*/{uid}
    const signalsRoot = ref(this.rtdb, `${this.roomPath}/signals`);
    const rootSnap = await get(signalsRoot);
    if (!rootSnap.exists()) return;
    const fromMap = rootSnap.val() as Record<string, Record<string, any>>;
    const removes: Array<Promise<void>> = [];
    const STALE_MS = 30_000;
    const now = Date.now();
    for (const [fromId, toMap] of Object.entries(fromMap)) {
      const inbox = toMap?.[this.uid!];
      if (!inbox) continue;
      const isOfflineSender = !online.includes(fromId);
      let allStale = true;
      for (const msg of Object.values(inbox) as any[]) {
        const t = typeof msg?.t === 'number' ? msg.t : 0;
        if (now - t <= STALE_MS) {
          allStale = false;
          break;
        }
      }
      if (isOfflineSender || allStale) {
        removes.push(remove(ref(this.rtdb, `${this.roomPath}/signals/${fromId}/${this.uid}`)));
      }
    }
    if (removes.length) {
      try {
        await Promise.all(removes);
      } catch (e) {
        console.error('Failed to cleanup inbox from offline peers', e);
      }
    }
  }

  // Host-only cleanup: remove any /signals/{from} where from not in peers,
  // and any /signals/{from}/{to} where to not in peers.
  private async cleanupGlobalSignalsForOffline(online: string[]) {
    const signalsRoot = ref(this.rtdb, `${this.roomPath}/signals`);
    const rootSnap = await get(signalsRoot);
    if (!rootSnap.exists()) return;
    const fromMap = rootSnap.val() as Record<string, Record<string, any>>;
    const removes: Array<Promise<void>> = [];
    for (const [fromId, toMap] of Object.entries(fromMap)) {
      if (!online.includes(fromId)) {
        removes.push(remove(ref(this.rtdb, `${this.roomPath}/signals/${fromId}`)));
        continue;
      }
      for (const toId of Object.keys(toMap || {})) {
        if (!online.includes(toId)) {
          removes.push(remove(ref(this.rtdb, `${this.roomPath}/signals/${fromId}/${toId}`)));
        }
      }
    }
    if (removes.length) {
      try { await Promise.all(removes); } catch {}
    }
  }

  async publishCursor(pos: Vec) {
    if (!this.uid) return;
    const now = performance.now();
    const period = this.throttleCursorMs; // 20 Hz target

    if (now - this.lastCursorAt < period) {
      return;
    }

    this.lastCursorAt = now;
    await set(ref(this.rtdb, `${this.cursorsPath}/${this.uid}`), { x: pos.x, y: pos.y, t: Date.now() });
  }

  async publishDucks() {
    if (!this.uid || !this._isHost || !this.remoteHandler.getDucks) return;
    const now = performance.now();
    const period = this.throttleDucksMs;
    if (now - this.lastDucksAt < period) return;
    this.lastDucksAt = now;
    const snaps = this.remoteHandler.getDucks();

    // Send directly over data channels to all peers for lowest latency
    const payload = JSON.stringify({ type: 'ducks', snaps });
    for (const dc of this.dataChannels.values()) {
      if (dc.readyState === 'open') dc.send(payload);
    }
  }

  async cleanup() {
    try {
      if (this.uid) {
        // Presence node will be removed due to onDisconnect; best-effort immediate remove
        await remove(ref(this.rtdb, `${this.peersPath}/${this.uid}`));
        await remove(ref(this.rtdb, `${this.roomPath}/signals/${this.uid}`));
        await remove(ref(this.rtdb, `${this.cursorsPath}/${this.uid}`));
      }
    } catch (e) {
      console.error('Failed to clean up player presence', e);
    }
  }

  private onMessage(peerId: string, data: any) {
    try {
      const msg = typeof data === 'string' ? JSON.parse(data) : data;
      if (msg.type === 'ducks' && this.remoteHandler.receiveDucks) {
        this.remoteHandler.receiveDucks(msg.snaps as DuckData[]);
      } else if (msg.type === 'cursor') {
        const { x, y } = msg as CursorData & { type: 'cursor' };
        this.remoteHandler.onUpdateRemoteCursor(peerId, { x, y });
      }
    } catch {
      console.warn('Failed to parse RTC data channel message', data);
    }
  }
}
