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
- Networking: WebRTC DataChannel (mesh) for low-latency duck snapshots
- Signaling/presence/cursors: Firebase Realtime Database (RTDB)
- Authentication: Anonymous (Firebase Auth)
- Hosting: External (Vercel/Netlify/Cloudflare Pages)

## Architecture overview

- Host-authoritative, peer-to-peer: one client is elected host and runs the physics simulation.
- Low-latency data plane: host broadcasts duck snapshots to peers over WebRTC DataChannels (~10 Hz). Guests interpolate.
- Signaling and coordination: Firebase RTDB is used for:
	- Host election and migration (rooms/{roomId}/hostId)
	- Presence (rooms/{roomId}/peers/{uid})
	- Cursors (rooms/{roomId}/cursors/{uid}) at ~20 Hz
	- WebRTC signaling messages (rooms/{roomId}/signals/{from}/{to}) with pruning and onDisconnect cleanup
- No custom server required. RTDB rules restrict writes (per-user presence/cursors, signaling sender/recipient) and allow host cleanup.
- Reliability: glare handling and signaling-state guards to avoid invalid SDP states; periodic pruning of stale signaling branches.

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
- `docs/adr/0003-webrtc-rtdb-signaling.md`
