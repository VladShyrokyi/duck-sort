# ADR: Monorepo Architecture and Package Layout

Date: 2025-10-12 17:00

## Status

Accepted

## Context

The project "Duck Sort" (working title: "Ducks") is a game about sorting point-like entities with physics-based interactions and multiplayer collaboration. We want to:

- Share core game logic, models, and utilities across web, mobile, and server
- Support real-time multiplayer with sessions and WebSockets
- Render the game in the browser and provide a React Native mobile client
- Maintain a simple developer workflow with a single source of truth for shared code

## Decision

Adopt a monorepo with clear package boundaries:

- `common/` — package for shared, framework-agnostic code (types, game state, physics core, utilities)
- `server/` — backend package (session management, multiplayer coordination, persistence hooks, WebSocket transport); reserved for future needs if Firebase-only approach suffices initially
- `web/` — web frontend package (browser rendering, input handling, UI)
- `mobile/` — React Native package (mobile rendering and input)

Each package encapsulates its own build tooling while depending on `common/` for shared logic. Clients join via room ID or shareable link.

## Consequences

- Shared logic evolves centrally in `common/`, reducing duplication and divergence
- Clients can ship independently while leveraging the same core game rules and physics
- Clear boundaries facilitate testing and continuous integration per package
- Slightly higher initial setup overhead for monorepo tooling (to be addressed in subsequent ADRs)

## Notes

The initial architecture tasks and planning have been drafted and tracked in `TODO.md`.
