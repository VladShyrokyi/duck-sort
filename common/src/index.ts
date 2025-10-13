// ADR: see /docs/adr/0001-architecture.md and /docs/adr/0002-p2p-firebase-sync.md

export type Color = 'red' | 'green' | 'blue' | 'yellow';

export interface Duck {
  id: string;
  color: Color;
  x: number;
  y: number;
}

export interface Wolf {
  id: string;
  x: number;
  y: number;
}

export const version = '0.1.0';
