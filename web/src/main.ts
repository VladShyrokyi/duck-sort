// ADR: see /docs/adr/0002-p2p-firebase-sync.md
import { Engine, Render, Runner, Bodies, Composite } from 'matter-js';
import { version } from '@duck-sort/common';

console.log('Duck Sort web starting, common version:', version);

const canvas = document.getElementById('game') as HTMLCanvasElement | null;
const engine = Engine.create();
const width = canvas?.width ?? 800;
const height = canvas?.height ?? 600;

const render = Render.create({
  element: document.body,
  canvas: canvas ?? undefined,
  engine,
  options: {
    width,
    height,
    wireframes: false,
    background: '#0b0e13',
  },
});

// demo bodies
const circle = Bodies.circle(width / 2, height / 2, 20, { restitution: 0.9 });
Composite.add(engine.world, [circle]);

Render.run(render);
Runner.run(Runner.create(), engine);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
} as const;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('Firebase initialized', db);
