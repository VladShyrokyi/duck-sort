import {
  collection,
  doc,
  onSnapshot,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
  Firestore,
} from 'firebase/firestore';
import { onAuthStateChanged, signInAnonymously, Auth } from 'firebase/auth';

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

  // refs
  private readonly roomRef;
  private readonly playersRef;
  private readonly cursorsRef;
  private readonly ducksRef;

  private unsubCursors: (() => void) | null = null;
  private unsubDucks: (() => void) | null = null;
  private lastCursorAt = 0;
  private lastDucksAt = 0;

  constructor(
    private readonly db: Firestore,
    private readonly auth: Auth,
    private readonly roomId: string,
    private readonly remoteHandler: RemoteHandler,
    private readonly throttleDucksMs: number = 100, // ~10 Hz default
    private readonly throttleCursorMs: number = 50, // ~20 Hz target
  ) {
    this.roomRef = doc(this.db, 'rooms', this.roomId);
    this.playersRef = collection(this.roomRef, 'players');
    this.cursorsRef = collection(this.roomRef, 'cursors');
    this.ducksRef = collection(this.roomRef, 'ducks');
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

    // Host election (first writer wins). Use transaction to set hostId if unset.
    this._isHost = await runTransaction(this.db, async (tx) => {
      const roomSnap = await tx.get(this.roomRef);
      const data = roomSnap.exists() ? (roomSnap.data() as RoomData) : undefined;
      if (!data?.hostId) {
        tx.set(
          this.roomRef,
          {
            hostId: this.uid,
            createdAt: serverTimestamp(),
          },
          { merge: true },
        );
        return true;
      }
      return data?.hostId === this.uid;
    });

    // Presence
    await setDoc(
      doc(this.playersRef, this.uid),
      { joinedAt: serverTimestamp(), isHost: this._isHost },
      { merge: true },
    );

    // Cursor subscription
    this.unsubCursors = onSnapshot(this.cursorsRef, (snap) => {
      snap.docChanges().forEach((ch) => {
        if (ch.doc.id === this.uid) {
          return;
        }

        const data = ch.doc.data() as CursorData;

        if (data && typeof data.x === 'number' && typeof data.y === 'number') {
          this.remoteHandler.onUpdateRemoteCursor(ch.doc.id, { x: data.x, y: data.y });
          this.remoteHandler.onPlayerJoin?.(ch.doc.id);
        }
      });
    });

    // Ducks subscription for guests
    if (!this._isHost && this.remoteHandler.receiveDucks) {
      this.unsubDucks = onSnapshot(this.ducksRef, (snap) => {
        const arr: DuckData[] = [];
        snap.forEach((docu) => {
          const duck = docu.data() as DuckData;
          arr.push({
            id: docu.id,
            x: duck.x,
            y: duck.y,
            vx: duck.vx,
            vy: duck.vy,
          });
        });
        this.remoteHandler.receiveDucks!(arr);
      });
    }

    return { uid: this.uid, isHost: this._isHost } as const;
  }

  async publishCursor(pos: Vec) {
    if (!this.uid) return;
    const now = performance.now();
    const period = this.throttleCursorMs; // 20 Hz target

    if (now - this.lastCursorAt < period) {
      return;
    }

    this.lastCursorAt = now;
    await setDoc(doc(this.cursorsRef, this.uid), {
      x: pos.x,
      y: pos.y,
      t: serverTimestamp(),
    });
  }

  async publishDucks() {
    if (!this.uid || !this._isHost || !this.remoteHandler.getDucks) {
      return;
    }

    const now = performance.now();
    const period = this.throttleDucksMs; // ~10 Hz default
    if (now - this.lastDucksAt < period) {
      return;
    }
    this.lastDucksAt = now;
    const snaps = this.remoteHandler.getDucks();
    const batch = writeBatch(this.db);
    for (const s of snaps) {
      batch.set(doc(this.ducksRef, s.id), {
        x: s.x,
        y: s.y,
        vx: s.vx,
        vy: s.vy,
        t: serverTimestamp(),
      });
    }
    await batch.commit();
  }

  async cleanup() {
    try {
      this.unsubCursors?.();
      this.unsubDucks?.();
      if (this.uid) {
        await updateDoc(doc(this.playersRef, this.uid), { leftAt: serverTimestamp() });
      }
    } catch (e) {
      console.error('Failed to clean up player presence', e);
    }
  }
}
