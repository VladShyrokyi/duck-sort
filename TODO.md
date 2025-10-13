# TODO

Project: **Ducks Sorting (multiplayer, host-simulated)**
Goal: deliver a working MVP with physics-based gameplay, peer-to-peer sync through Firestore, and deterministic room logic.

---

### 1. Initialize Project
- [x] Set up project structure with Vite or plain bundler (Vanilla JS/TS).
- [x] Configure TypeScript, ESLint, and basic build scripts.
- [x] Add Matter.js dependency for physics and rendering.
- [x] Set up Firebase SDK (Firestore, Auth, Hosting).

---

### 2. Core Gameplay Loop
- [ ] Implement the base game loop using fixed timestep (semi-implicit Euler).
- [ ] Add Matter.js world, engine, and renderer.
- [ ] Create entity classes or structures: **Wolf**, **Duck**, and **Zone**.
- [ ] Implement toroidal (wrap-around) screen bounds.
- [ ] Define base physics constants and damping values.

---

### 3. Wolves (Player Cursors)
- [ ] Implement inertial “wolf” motion following cursor/touch with acceleration and drag.
- [ ] Support multiple wolves (up to 4).
- [ ] Assign each wolf a unique color or ID for identification.
- [ ] Handle smooth motion and position interpolation for remote wolves.

---

### 4. Ducks (Color Points)
- [ ] Implement duck movement and inertia.
- [ ] Apply repulsion forces from all visible wolves within radius.
- [ ] Prevent unrealistic accelerations (clamp max force and speed).
- [ ] Implement continuous wrap-around for ducks leaving screen edges.

---

### 5. Win Condition & Timer
- [ ] Implement color-zone detection (each color’s ducks grouped together).
- [ ] Detect when all colors have separate zones → trigger victory state.
- [ ] Add timer that starts when the first player starts the game.
- [ ] Display end screen: “You sorted the ducks in XX.XX seconds”.

---

### 6. Multiplayer Architecture
- [ ] Use anonymous Firebase Auth to identify players.
- [ ] Create Firestore structure:
  ```
  rooms/{roomId}
  rooms/{roomId}/players/{playerId}
  rooms/{roomId}/cursors/{playerId}
  rooms/{roomId}/ducks/{duckId}
  ```
- [ ] Implement host election: first player = host.
- [ ] Host simulates physics and writes duck snapshots to Firestore (≈10 Hz).
- [ ] Non-host clients sync duck states from Firestore and interpolate positions.
- [ ] Each client writes its own cursor data to Firestore (≈20 Hz).
- [ ] Ensure late joins subscribe correctly to existing room state.

---

### 7. Room Lifecycle
- [ ] Generate deterministic `seed` based on `roomId`.
- [ ] Create ducks deterministically from the seed.
- [ ] Host sets room state to `'active'` on start.
- [ ] Host updates `finishedAt` and `'finished'` on victory.
- [ ] Handle reconnection and new host election when host disconnects.

---

### 8. Firestore Security Rules
- [ ] Players can write only their own player and cursor documents.
- [ ] Only the host can update ducks and room state.
- [ ] Deny writes when the room is `'finished'`.
- [ ] Validate number ranges and prevent invalid values (NaN, Infinity).

---

### 9. Rendering & UI
- [ ] Implement Matter.js canvas render layer.
- [ ] Add visual representation for ducks, wolves, and zones.
- [ ] Display HUD: timer, room ID, connected players.
- [ ] Add “Game Won” overlay screen.

---

### 10. Optimization
- [ ] Throttle Firestore writes (ducks 10 Hz, cursors 20 Hz).
- [ ] Lerp ducks toward authoritative positions (α ≈ 0.2).
- [ ] Reuse Matter.js bodies instead of recreating them.
- [ ] Cap total number of ducks per room for performance.

---

### 11. Infrastructure & Documentation
- [ ] Configure Firebase Hosting for deployment.
- [ ] Set up local Firebase emulator for dev testing.
- [ ] Update `README.md` with gameplay, stack, and architecture details.

---

**Execution rule:**
Each numbered section represents a logical stage.
Copilot Beast mode should complete one stage at a time and mark its checklist items as done before moving to the next.
