import {
  Database,
  DatabaseReference,
  ref,
  get,
  set,
  serverTimestamp,
  child,
  push,
  onValue,
  remove,
  onDisconnect,
  Unsubscribe,
  update,
} from 'firebase/database';

type Refs = {
  room: DatabaseReference;
  hostId: DatabaseReference;
  createdAt: DatabaseReference;
  state: DatabaseReference;
  peers: DatabaseReference;
  presence: DatabaseReference;
  cursors: DatabaseReference;
  cursor: DatabaseReference;
  signals: DatabaseReference;
  outbox: DatabaseReference;
  getChannel: (fromId: string, toId: string) => DatabaseReference;
  getChannelsFrom: (fromId: string) => DatabaseReference;
  getIncome: (peerId: string) => DatabaseReference;
  getOutcome: (peerId: string) => DatabaseReference;
};

type ServerTimestamp = number | ReturnType<typeof serverTimestamp>;

type SignalData = { t?: ServerTimestamp } & (
  | (RTCSessionDescriptionInit & { type: 'answer' | 'offer' })
  | (RTCIceCandidateInit & { candidate: string })
);
type SignalPayload = Omit<SignalData, 't'>;

export interface RoomData {
  hostId: string;
  createdAt: ServerTimestamp;
  state: {
    status: 'idle' | 'active' | 'finished';
    finishedAt?: ServerTimestamp;
    winnerTimeMs?: number;
  };
  peers: Record<string, boolean>;
  cursors: Record<string, { x: number; y: number; t: ServerTimestamp }>;
  signals: {
    [fromId: string]: {
      [toId: string]: {
        [signalId: string]: SignalData;
      };
    };
  };
}

export class FirebaseRoomSession {
  private _refs!: Refs;
  private _subscriptions: Unsubscribe[] = [];

  constructor(private readonly db: Database) {}

  async start(roomId: string, userId: string) {
    const getRef = (path: string) => ref(this.db, path);
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const createGetRef =
      <Args extends any[]>(getPath: (...args: Args) => string) =>
      (...args: Args) =>
        ref(this.db, getPath(...args));

    const roomPath = `rooms/${roomId}`;
    const hostIdPath = `${roomPath}/hostId`;
    const createdAtPath = `${roomPath}/createdAt`;
    const statePath = `${roomPath}/state`;

    const peersPath = `${roomPath}/peers`;
    const presencePath = `${peersPath}/${userId}`;

    const cursorsPath = `${roomPath}/cursors`;
    const cursorPath = `${cursorsPath}/${userId}`;

    const signalsPath = `${roomPath}/signals`;
    const outboxPath = `${signalsPath}/${userId}`;
    const getChannelsFrom = (fromId: string) => `${signalsPath}/${fromId}`;
    const getChannelPath = (fromId: string, toId: string) => `${getChannelsFrom(fromId)}/${toId}`;

    const getIncomePath = (peerId: string) => getChannelPath(peerId, userId);
    const getOutcomePath = (peerId: string) => getChannelPath(userId, peerId);

    this._refs = {
      room: getRef(roomPath),
      hostId: getRef(hostIdPath),
      createdAt: getRef(createdAtPath),
      state: getRef(statePath),
      peers: getRef(peersPath),
      presence: getRef(presencePath),
      cursors: getRef(cursorsPath),
      cursor: getRef(cursorPath),
      signals: getRef(signalsPath),
      outbox: getRef(outboxPath),
      getChannel: createGetRef(getChannelPath),
      getChannelsFrom: createGetRef(getChannelsFrom),
      getIncome: createGetRef(getIncomePath),
      getOutcome: createGetRef(getOutcomePath),
    } as const;

    await this.updatePresence();

    try {
      await onDisconnect(this._refs.presence).remove();
    } catch (e) {
      throw new Error('Failed to setup onDisconnect for presence: ' + (e as Error).message);
    }

    try {
      await onDisconnect(this._refs.cursor).remove();
    } catch (e) {
      throw new Error('Failed to setup onDisconnect for cursor: ' + (e as Error).message);
    }

    try {
      await onDisconnect(this._refs.outbox).remove();
    } catch (e) {
      throw new Error('Failed to setup onDisconnect for outbox: ' + (e as Error).message);
    }
  }

  async dispose() {
    this._subscriptions.forEach((unsubscribe) => unsubscribe());
    this._subscriptions = [];

    try {
      await remove(this._refs.presence);
    } catch {
      console.error('Failed to remove presence on dispose');
    }
    try {
      await remove(this._refs.cursor);
    } catch {
      console.error('Failed to remove cursor on dispose');
    }
    try {
      await remove(this._refs.outbox);
    } catch {
      console.error('Failed to remove outbox on dispose');
    }
  }

  async updateStateToActive() {
    await this.updateState({ status: 'active' });
  }

  async updateStateToFinished(winnerTimeMs?: number) {
    await this.updateState({
      status: 'finished',
      finishedAt: serverTimestamp(),
      winnerTimeMs,
    });
  }

  async updateStateToIdle() {
    await this.updateState({ status: 'idle' });
  }

  /**
   * Get the current host ID from Firebase.
   */
  async getHostId() {
    try {
      const hostIdSnapshot = await get(this._refs.hostId);
      return hostIdSnapshot.val() as string | null;
    } catch (e) {
      throw new Error('Failed to get host ID from Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Get the list of online peers from Firebase.
   */
  async getOnlinePeers() {
    try {
      const peersSnapshot = await get(this._refs.peers);
      const peersMap = (peersSnapshot.val() || {}) as Record<string, boolean>;
      return Object.keys(peersMap);
    } catch (e) {
      throw new Error('Failed to get online peers from Firebase: ' + (e as Error).message);
    }
  }

  async getSignals() {
    try {
      const signalsSnapshot = await get(this._refs.signals);
      return signalsSnapshot.val() as RoomData['signals'] | null;
    } catch (e) {
      throw new Error('Failed to get signals from Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Update the host ID in Firebase.
   * @param {string} hostId
   */
  async updateHostId(hostId: string) {
    try {
      await set(this._refs.hostId, hostId);
    } catch (e) {
      throw new Error('Failed to update host ID in Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Save the room creation timestamp in Firebase.
   */
  async saveCreatedAt() {
    try {
      await set(this._refs.createdAt, serverTimestamp());
    } catch (e) {
      throw new Error('Failed to save createdAt in Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Update the presence of the current user in Firebase.
   */
  async updatePresence() {
    try {
      await set(this._refs.presence, true);
    } catch (e) {
      throw new Error('Failed to update presence in Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Update the cursor position of the current user in Firebase.
   *
   * @param {number} x
   * @param {number} y
   */
  async updateCursor(x: number, y: number) {
    try {
      const cursorData: RoomData['cursors'][string] = { x, y, t: serverTimestamp() };
      await set(this._refs.cursor, cursorData);
    } catch (e) {
      throw new Error('Failed to update cursor in Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Send a signal to a peer. If signalId is provided, it will overwrite the existing signal with that ID.
   *
   * @param {string} peerId
   * @param {SignalPayload} payload
   * @param {string} signalId
   */
  async sendSignal(peerId: string, payload: SignalPayload, signalId?: string) {
    try {
      const outcomeRef = this._refs.getOutcome(peerId);
      const signalDataRef = signalId ? child(outcomeRef, signalId) : push(outcomeRef);
      await set(signalDataRef, {
        ...payload,
        t: serverTimestamp(),
      });
    } catch (e) {
      throw new Error('Failed to send signal in Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Remove an incoming signal from a peer.
   *
   * @param {string} peerId
   * @param {...string} signalIds
   */
  async removeIncomingSignals(peerId: string, ...signalIds: string[]) {
    try {
      if (!signalIds.length) {
        return;
      }
      const incomeRef = this._refs.getIncome(peerId);
      await update(
        incomeRef,
        signalIds.reduce((acc, key) => ({ ...acc, [key]: null }), {}),
      );
    } catch (e) {
      throw new Error('Failed to remove incoming signal in Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Remove an outgoing signal to a peer.
   *
   * @param {string} peerId
   * @param {...string} signalIds
   */
  async removeOutgoingSignals(peerId: string, ...signalIds: string[]) {
    try {
      if (!signalIds.length) {
        return;
      }
      const outcomeRef = this._refs.getOutcome(peerId);
      await update(
        outcomeRef,
        signalIds.reduce((acc, key) => ({ ...acc, [key]: null }), {}),
      );
    } catch (e) {
      throw new Error('Failed to remove outgoing signal in Firebase: ' + (e as Error).message);
    }
  }

  /**
   * Subscribe to cursor updates in the room.
   *
   * @param {(cursors: RoomData['cursors']) => void} callback
   */
  subscribeCursors(callback: (cursors: RoomData['cursors']) => void) {
    const subscription = onValue(this._refs.cursors, (snapshot) => {
      const data = snapshot.val() as RoomData['cursors'] | null;
      callback(data || {});
    });
    this._subscriptions.push(subscription);

    return subscription;
  }

  /**
   * Subscribe to peer updates in the room.
   * @param {(peers: string[]) => void} callback
   */
  subscribePeers(callback: (peers: string[]) => void) {
    const subscription = onValue(this._refs.peers, (snapshot) => {
      const map = (snapshot.val() || {}) as Record<string, boolean>;
      const data = Object.keys(map);
      callback(data);
    });
    this._subscriptions.push(subscription);

    return subscription;
  }

  /**
   * Subscribe to incoming signals from a specific peer.
   *
   * @param {string} peerId
   * @param {(signal: SignalData | null) => void} callback
   */
  subscribePeerSignals(peerId: string, callback: (signal: Record<string, SignalData>) => void) {
    const subscription = onValue(this._refs.getIncome(peerId), (snapshot) => {
      const data = (snapshot.val() || {}) as Record<string, SignalData>;
      callback(data);
    });
    this._subscriptions.push(subscription);

    return subscription;
  }

  /**
   * Subscribe to room state updates.
   *
   * @param {(state: RoomData['state'] | null) => void} callback
   */
  subscribeState(callback: (state: RoomData['state'] | null) => void) {
    const subscription = onValue(this._refs.state, (snapshot) => {
      const data = snapshot.val() as RoomData['state'] | null;
      callback(data);
    });
    this._subscriptions.push(subscription);

    return subscription;
  }

  /**
   * Subscribe to host ID updates.
   *
   * @param {(hostId: string | null) => void} callback
   */
  subscribeHostId(callback: (hostId: string | null) => void) {
    const subscription = onValue(this._refs.hostId, (snapshot) => {
      const data = snapshot.val() as string | null;
      callback(data);
    });
    this._subscriptions.push(subscription);

    return subscription;
  }

  /**
   * Remove the signaling channel between two peers.
   *
   * @param {string} from
   * @param {string} to
   */
  async removeChannel(from: string, to: string) {
    try {
      await remove(this._refs.getChannel(from, to));
    } catch (e) {
      throw new Error(`Failed to remove channel (${from} -> ${to}) in Firebase: ` + (e as Error).message);
    }
  }

  /**
   * Remove all signaling channels from a specific peer.
   *
   * @param {string} from
   */
  async removeChannelsFrom(from: string) {
    try {
      await remove(this._refs.getChannelsFrom(from));
    } catch (e) {
      throw new Error(`Failed to remove channels (${from}) in Firebase: ` + (e as Error).message);
    }
  }

  /**
   * Update the room state in Firebase.
   * @param {RoomData.state} state
   */
  private async updateState(state: RoomData['state']) {
    try {
      await set(this._refs.state, state);
    } catch (e) {
      throw new Error('Failed to update room state in Firebase: ' + (e as Error).message);
    }
  }
}
