# Firebase Setup (RTDB + Auth)

This project uses Firebase for multiplayer coordination only:
- Realtime Database (RTDB) for signaling, presence, and cursors
- Auth (Anonymous) for identifying players
- Emulators for local development

Frontend hosting is handled outside Firebase (e.g., Vercel/Netlify/Cloudflare Pages).

---

## 0) Prerequisites

- Node.js ≥ 18
- A Firebase account with access to a GCP project
- Firebase CLI
  ```bash
  npm i -g firebase-tools
  firebase login
  ```

---

## 1) Create or Select a Firebase Project

If you already have a project, note its Project ID and skip to Step 2.

Otherwise, create one in the Firebase Console and connect locally:
```bash
firebase use --add   # select your project ID and assign a local alias, e.g. "dev"
```

---

## 2) Initialize Firebase (RTDB, Auth, Emulators)

Run the interactive init and enable: Realtime Database, Authentication, Emulators (RTDB, Auth). Hosting is not required.

```bash
firebase init
```

Accept creation/update of `.firebaserc`, `firebase.json`, and `database.rules.json`.

---

## 3) Deploy RTDB Rules

Deploy your Realtime Database rules to the selected project:
```bash
firebase deploy --only database
```

---

## 4) Start Emulators

Start the local emulators for RTDB and Auth:
```bash
firebase emulators:start
```

Run the web app in another terminal (example with Vite):
```bash
npm run -w web dev
```

The app should connect to your Firebase project (or to emulators if configured in code).

---

Done.
