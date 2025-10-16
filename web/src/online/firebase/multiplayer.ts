import { onAuthStateChanged, signInAnonymously, Auth } from 'firebase/auth';
import { ref, set, onDisconnect, onValue, update, push, child, remove, Database } from 'firebase/database';

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

  // throttling
  private lastCursorAt = 0;
  private lastDucksAt = 0;

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
    await signInAnonymously(this.auth);
    this.uid = await new Promise<string>((resolve) => {
      const unsub = onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(user.uid);
          unsub();
        }
      });
    });

    // Host election: first writer to roomPath/host wins
    const hostRef = ref(this.rtdb, `${this.roomPath}/hostId`);
    // createdAtRef not needed; keep path update below

    // Attempt to become host if hostId absent
    const hostClaim = ref(this.rtdb, `${this.roomPath}/claims/${this.uid}`);
    await set(hostClaim, true);
    onDisconnect(hostClaim)
      .remove()
      .catch((err) => {
        console.warn('Failed to set onDisconnect for host claim', err);
      });

    // Simple host election: if hostId not set, set to our uid
    await update(ref(this.rtdb, this.roomPath), {
      createdAt: Date.now(),
    });

    // Watch hostId
    await new Promise<void>((resolve) => {
      onValue(
        hostRef,
        async (snap) => {
          const current = snap.val();
          if (!current) {
            // try to set ourselves as host
            await update(ref(this.rtdb, this.roomPath), { hostId: this.uid });
            return; // will re-trigger
          }
          this._isHost = current === this.uid;
          resolve();
        },
        { onlyOnce: true } as any,
      );
    });

    // Presence in peers
    const meRef = ref(this.rtdb, `${this.peersPath}/${this.uid}`);
    await set(meRef, { joinedAt: Date.now(), isHost: this._isHost });
    onDisconnect(meRef)
      .update({ leftAt: Date.now() })
      .catch((err) => {
        console.warn('Failed to set onDisconnect for peer presence', err);
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
    onValue(ref(this.rtdb, this.peersPath), (snap) => {
      const peers: Record<string, any> = snap.val() || {};
      Object.keys(peers).forEach((pid) => {
        if (pid === this.uid) return;
        if (!this.peers.has(pid)) this.connectToPeer(pid);
      });
    });

    return { uid: this.uid, isHost: this._isHost } as const;
  }

  private async connectToPeer(peerId: string) {
    if (!this.uid) return;
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
        | (RTCSessionDescriptionInit & { type: 'offer' | 'answer' })
        | (RTCIceCandidateInit & { candidate: string });
      const msgs = snap.val() as Record<string, SignalMsg> | null;
      if (!msgs) return;
      const handledKeys: string[] = [];
      for (const [key, msg] of Object.entries(msgs)) {
        if ((msg as any).type === 'offer' && !initiator) {
          await pc.setRemoteDescription(new RTCSessionDescription(msg as RTCSessionDescriptionInit));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          await this.signal(peerId, answer, key);
        } else if ((msg as any).type === 'answer' && initiator) {
          await pc.setRemoteDescription(new RTCSessionDescription(msg as RTCSessionDescriptionInit));
          handledKeys.push(key);
        } else if ((msg as any).candidate) {
          try {
            await pc.addIceCandidate(new RTCIceCandidate(msg as RTCIceCandidateInit));
          } catch {}
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
    dc.onopen = () => {
      /* could log open */
    };
    dc.onclose = () => {
      this.dataChannels.delete(peerId);
    };
  }

  private async signal(peerId: string, payload: any, key?: string) {
    const path = `${this.roomPath}/signals/${this.uid}/${peerId}`;
    const bagRef = ref(this.rtdb, path);
    const entryRef = key ? child(bagRef, key) : push(bagRef);
    await set(entryRef, payload);
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
        await update(ref(this.rtdb, `${this.peersPath}/${this.uid}`), { leftAt: Date.now() });
        await remove(ref(this.rtdb, `${this.roomPath}/signals/${this.uid}`));
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
    } catch {}
  }
}
