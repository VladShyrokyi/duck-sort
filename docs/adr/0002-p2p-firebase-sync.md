# ADR: P2P-Oriented Host Client with Firebase Sync

Date: 2025-10-12 18:00

## Status
Accepted

## Context
We need low-latency multiplayer and a simple infrastructure for early iterations. Running full server-side simulation adds operational overhead. A pragmatic approach is to let one client (the host) simulate physics and interactions while other clients sync the state. Firebase offers managed services (Auth, Firestore, Hosting) that can reduce setup complexity while providing realtime updates and security rules.

Accepted stack:
- Frontend: Vanilla JS/TS
- Physics and render: Matter.js
- Database/sync: Firestore (Firebase) — room state and client subscriptions
- Authentication: Anonymous (Firebase Auth)

## Decision
- Elect one client as the host to run the physics simulation and authoritative game loop.
- Persist and broadcast authoritative state via Firestore on a throttled cadence.
- Non-host clients subscribe to Firestore changes and reconcile locally, smoothing corrections.
- Use Firestore documents/collections for: room metadata, presence, inputs, and state snapshots.
- Use Firebase Auth (anonymous) for per-user identity and security rules.
- Avoid a dedicated backend server for the initial version; reserve the `server/` package for future needs.

## Consequences
Pros:
- Rapid MVP with minimal infrastructure and ops
- Host experiences lowest latency; others get near-real-time updates
- Security and auth managed by Firebase; simple deployment via Hosting

Cons / Trade-offs:
- Host migration required on disconnect; added complexity for re-election
- Firestore write/read throughput and costs need monitoring (throttling essential)
- State convergence is eventual; clients may observe small corrections

Notes:
- Add Firebase security rules to enforce host-authoritative writes for room state and per-user writes for presence/inputs.
- Document host selection and failover strategy in a follow-up ADR if complexity grows.
- Related: see `README.md` Gameplay and Architecture sections and `TODO.md` for planning tasks.
