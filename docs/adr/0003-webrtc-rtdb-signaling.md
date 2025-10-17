# ADR: WebRTC DataChannel with Firebase RTDB Signaling & Presence

Date: 2025-10-16 17:00

## Status
Accepted

## Context
Initial multiplayer relied on Firestore for duck state snapshots and cursors. This caused jitter due to higher latency and write amplification, and complicated host migration. We need a low-latency data plane and a lightweight coordination layer without operating a custom backend.

## Decision
- Use WebRTC DataChannels for the authoritative duck state broadcast from host to peers (mesh).
- Use Firebase Realtime Database (RTDB) for:
  - Signaling: offers/answers/ICE under `rooms/{roomId}/signals/{from}/{to}` with timestamps.
  - Presence: `rooms/{roomId}/peers/{uid}` with onDisconnect removal.
  - Host election and migration: `rooms/{roomId}/hostId` with transactions and re-election on disconnect.
  - Cursors: `rooms/{roomId}/cursors/{uid}` written by each client (~20 Hz).
- Implement signaling hygiene:
  - Timestamp all messages; drop stale ones; prune outbox/inbox to offline peers; allow host to prune global stale branches.
  - On DataChannel open, proactively clear both directions of signaling branches for that pair.
  - Guard SDP application with signalingState checks; handle glare with rollback before applying a remote offer.

## Consequences
- Pros:
  - Smooth gameplay due to low-latency DataChannels; reduced DB writes.
  - Simple operational footprint: Auth + RTDB only, no custom servers.
  - Robustness: host migration supported; cursors/presence clean up on disconnect; signaling stays tidy.
- Cons/Tradeoffs:
  - Mesh topology doesn’t scale to very large rooms.
  - RTDB rules must balance privacy (sender/recipient visibility) and cleanup (host pruning authority).
  - Slightly higher complexity in client to manage signaling states, cleanup, and host election.
