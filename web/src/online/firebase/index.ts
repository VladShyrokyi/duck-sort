import { FirebaseOptions, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

export const initializeFirebase = (options: FirebaseOptions, isDev = false) => {
  const app = initializeApp(options, `app-${Math.random().toString(36).slice(2)}`);
  const auth = getAuth(app);
  const db = getFirestore(app);

  if (isDev) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  console.log('Firebase initialized', {
    isDev: isDev,
  });

  return { app, db, auth };
};
