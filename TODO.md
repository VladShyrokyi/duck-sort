# TODO

Project: **Ducks Sorting (multiplayer, host-simulated)**
Goal: deliver a working MVP with physics-based gameplay, P2P sync via WebRTC (host authoritative), Firebase Realtime Database for signaling/presence, and deterministic room logic.

---

### 1. Initialize Project
- [x] Set up project structure with Vite or plain bundler (Vanilla JS/TS).
- [x] Configure TypeScript, ESLint, and basic build scripts.
- [x] Add Matter.js dependency for physics and rendering.
- [x] Set up Firebase SDK (Realtime Database, Auth, Hosting).

---

### 2. Core Gameplay Loop
- [x] Implement the base game loop using fixed timestep (semi-implicit Euler).
- [x] Add Matter.js world, engine, and renderer.
- [x] Create entity classes or structures: **Wolf**, **Duck**, and **Zone**.
- [ ] Implement toroidal (wrap-around) screen bounds. (Currently using static walls)
- [x] Define base physics constants and damping values.

---

### 3. Wolves (Player Cursors)
- [x] Implement inertial “wolf” motion following cursor/touch with acceleration and drag.
- [x] Support multiple wolves (up to 4).
- [x] Assign each wolf a unique color or ID for identification.
- [x] Handle smooth motion and position interpolation for remote wolves.

---

### 4. Ducks (Color Points)
- [x] Implement duck movement and inertia.
- [x] Apply repulsion forces from all visible wolves within radius.
- [ ] Prevent unrealistic accelerations (clamp max force and speed).
- [ ] Implement continuous wrap-around for ducks leaving screen edges.

---

### 5. Win Condition & Timer
- [ ] Implement color-zone detection (each color’s ducks grouped together).
- [ ] Detect when all colors have separate zones → trigger victory state.
- [ ] Add timer that starts when the first player starts the game.
- [ ] Display end screen: “You sorted the ducks in XX.XX seconds”.

---

### 6. Multiplayer Architecture (RTDB + WebRTC)
- [x] Use anonymous Firebase Auth to identify players.
- [x] Create Realtime Database structure:
  ```
  rooms/{roomId}
    hostId: string
    createdAt: number
    peers/{uid}: { joinedAt, leftAt?, isHost }
    cursors/{uid}: { x, y, t }
    signals/{fromUid}/{toUid}/{key}: SDP/ICE with timestamp t
  ```
- [x] Implement host election (first writer wins) and re-election if host disconnects.
- [x] Host simulates physics and broadcasts duck snapshots via WebRTC DataChannel (≈10 Hz).
- [x] Non-host clients receive duck snapshots and interpolate positions.
- [x] Each client writes its own cursor data to RTDB (≈20 Hz).
- [x] Ensure late joins connect to peers and start receiving state.
- [x] Presence and cleanup: onDisconnect removes peers, cursors, and signals outbox; periodic pruning for stale signals.

---

### 7. Room Lifecycle
- [x] Generate deterministic `seed` based on `roomId`.
- [x] Create ducks deterministically from the seed.
- [ ] Host sets room state to `'active'` on start.
- [ ] Host updates `finishedAt` and `'finished'` on victory.
- [x] Handle reconnection and new host election when host disconnects.

---

### 8. Realtime Database Security Rules
- [x] Players can write only their own presence (peers/{uid}) and cursor (cursors/{uid}).
- [x] Signaling rules restrict writes to sender and reads to sender/recipient; host can prune stale branches.
- [ ] Deny writes when the room is `'finished'`.
- [ ] Validate number ranges and prevent invalid values (NaN, Infinity).

---

### 9. Rendering & UI
- [x] Implement Matter.js canvas render layer.
- [ ] Add visual representation for ducks, wolves, and zones.
- [ ] Display HUD: timer, room ID, connected players.
- [ ] Add “Game Won” overlay screen.

---

### 10. Optimization
- [x] Throttle network updates (ducks 10 Hz via WebRTC DC, cursors 20 Hz via RTDB).
- [x] Lerp ducks toward authoritative positions (α ≈ 0.2) on guests.
- [ ] Reuse Matter.js bodies instead of recreating them.
- [ ] Cap total number of ducks per room for performance.

---

### 11. Infrastructure & Documentation
- [x] Set up local Firebase emulator for dev testing.
- [x] Update `README.md` with gameplay, stack, and architecture details.
- [ ] Configure hosting for deployment on any free available service (vercel, cloudflare, netlify, etc).

---

**Execution rule:**
Each numbered section represents a logical stage.
Copilot Beast mode should complete one stage at a time and mark its checklist items as done before moving to the next.
