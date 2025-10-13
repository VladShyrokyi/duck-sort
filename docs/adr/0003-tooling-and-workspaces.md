# ADR: Tooling and Workspaces Setup

Date: 2025-10-13 02:45

## Status
Accepted

## Context
We need a minimal but productive setup for a monorepo with shared code and a browser client. Requirements include: TypeScript, ESLint, fast dev server, easy static hosting, and future Firebase + Matter.js integration.

## Decision
- Use npm workspaces at the repo root to manage `common` and `web` packages.
- `web` uses Vite for fast dev (`vite`, `vite build`, `vite preview`).
- TypeScript configured with strictness and bundler-friendly module resolution.
- ESLint (`@typescript-eslint`) and Prettier for code quality and formatting.
- `web` depends on `@duck-sort/common` via `file:../common` and TypeScript `paths` to enable local dev without prebuilds.
- Prepare Firebase and Matter.js dependencies in `web`.

## Consequences
- Streamlined local development and builds.
- Shared code in `common` can be imported directly in `web` during dev (path mapping) and via workspace link on build.
- Additional packages (mobile, server) can be added to workspaces without major changes.
- Need to ensure consistent TypeScript configs across packages as the repo grows.
