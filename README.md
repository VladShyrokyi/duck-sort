# Duck Sort (working title: "Ducks")

Duck Sort is a small experimental game about sorting points on a plane. The points are thematically called "ducks." The goal is to design a playful, tactile experience with realistic motion and multiplayer collaboration.

## Gameplay

Terminology:
- "Wolves" — white points controlled indirectly by players; they chase the active player's cursor with inertia.
- "Ducks" — colored points that bounce off wolves with physical inertia.

Rules and flow:
1. Wolves follow the current player's cursor with a delayed, inertia-driven movement.
2. Ducks bounce away from wolves and retain momentum according to the physics simulation.
3. The number of simultaneously active wolves per room is limited by configuration (max 4).
4. The playfield is toroidal: points exiting any screen edge re-enter from the opposite edge.
5. When all ducks of a given color cluster within a contiguous area that contains no other colors, that area is considered that color's zone.
6. The game is won when every color has its own zone.
7. On win, show: "You sorted the ducks in XX.XX seconds".
8. A timer runs during gameplay. It starts when the first player initiates the game. Late joiners do not affect the timer.

## Highlights

- Multiplayer sessions via room ID or shareable link
- Runs in the browser (web app rendering)
- Cross-platform potential with a React Native mobile app
- Physics-driven interactions: points respond to drag-and-drop inertia and momentum

## Technology stack (accepted)

- Frontend: Vanilla JS/TS
- Physics and render: Matter.js
- Database and sync: Firestore (Firebase) — room state storage and client subscriptions
- Authentication: Anonymous (Firebase Auth)
- Hosting: Firebase Hosting

## Architecture overview

- Peer-to-peer oriented: one client in the room acts as the host and runs the physics simulation and interactions.
- Other clients subscribe to host-published state via Firestore with throttled updates.
- Firestore is the shared data layer for room/session state and presence; no separate backend server is required for the initial version.
- This approach minimizes infrastructure, reduces latency for the host, and accelerates a basic multiplayer with pragmatic state convergence.

Key concerns and approaches:
- Host selection/failover: elect a host (e.g., creator or lowest latency) and re-elect on disconnect.
- State model: room document for metadata/presence, sub-collections for snapshots/inputs; host writes authoritative state at a throttled cadence.
- Conflict handling: host authoritative; clients reconcile to host state, smoothing visual corrections.
- Security: Firebase rules to restrict writes (host-authoritative room state, per-user presence/inputs).

## Monorepo layout

This repository is organized as a monorepo with the following packages:

- `common/` — shared code reused by server, web, and mobile
- `server/` — backend package (reserved for future needs). Not required for the initial Firebase-based P2P sync.
- `web/` — browser client: game logic and rendering in the web app
- `mobile/` — React Native app: cross-platform client with game logic and rendering

## Status

Planning and structure in progress. See the ADR for architecture decisions:

- `docs/adr/0001-architecture.md`
- `docs/adr/0002-p2p-firebase-sync.md`
