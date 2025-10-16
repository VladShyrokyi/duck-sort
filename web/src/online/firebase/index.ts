import { FirebaseOptions, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

export const initializeFirebase = (options: FirebaseOptions, isDev = false) => {
  const app = initializeApp(options, `app-${Math.random().toString(36).slice(2)}`);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const rtdb = getDatabase(app);

  if (isDev) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectDatabaseEmulator(rtdb, 'localhost', 9000);
  }

  console.log('Firebase initialized', {
    isDev: isDev,
  });

  return { app, db, rtdb, auth };
};
