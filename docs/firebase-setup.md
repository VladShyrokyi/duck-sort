# Firebase Setup (Firestore, Auth)

This project uses Firebase for multiplayer synchronization only:
- **Firestore** for room/game state
- **Auth (Anonymous)** for identifying players
- **Emulators** for local development

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

If you already have a project, note its **Project ID** and skip to Step 2.

Otherwise, create one in the Firebase Console:
1. Go to https://console.firebase.google.com
2. Click “Add project,” create a new project, and remember the **Project ID**.

Then connect the local repo to the project:
```bash
firebase use --add         # select your project ID and assign a local alias, e.g. "dev"
```

---

## 2) Initialize Required Firebase Products

From the repo root, run interactive init and enable these products: **Firestore**, **Auth**, **Realtime Database**, **Functions**, **Emulators**.

```bash
firebase init
```

Answer the prompts:
- Firestore: Yes (Production mode)
- Authentication: Yes
- Realtime Database: Yes
- Functions: Yes (Node 20)
- Emulators: Yes (Firestore, Auth, Realtime Database, Functions)
- Hosting: **No**
- Accept creation/update of:
    - `.firebaserc`
    - `firebase.json`
    - `firestore.rules`
    - `database.rules.json`
    - `functions/` folder

> If the wizard didn’t create these files, create them as shown in steps below.

---

## 3) Enable Anonymous Authentication

Using the Firebase Console:
1. Go to **Build → Authentication → Sign-in method**.
2. Enable **Anonymous** provider and save.

(There is no stable CLI to toggle providers; use the Console.)

---

## 4) Create a Web App to Obtain SDK Config

Using the Firebase Console:
1. Go to **Project Settings → Your apps**.
2. Add a **Web app** (name it `ducks-web` or similar).
3. Copy the Web SDK config (apiKey, authDomain, projectId, etc.).

Create environment files for the web app:

```
web/.env.local
web/.env
```

Put the SDK config into both files (values from the Console):

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

---

## 5) Firestore Rules

Ensure `firestore.rules` contains the required access model:

```ruby
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    function isAuthed() { return request.auth != null; }
    function isHost(roomId) {
      return isAuthed() &&
        get(/databases/$(db)/documents/rooms/$(roomId)).data.hostUid == request.auth.uid;
    }

    match /rooms/{roomId} {
      allow read: if isAuthed();
      // Host controls room metadata/state
      allow update: if isHost(roomId);

      match /players/{playerId} {
        allow read: if isAuthed();
        // Player may create/update only their own doc
        allow create, update: if request.auth.uid == request.resource.data.uid;
      }

      match /cursors/{playerId} {
        allow read: if isAuthed();
        // Player may create/update only their own cursor
        allow create, update: if request.auth.uid == request.resource.data.uid;
      }

      match /ducks/{duckId} {
        allow read: if isAuthed();
        // Only host writes authoritative duck state
        allow create, update: if isHost(roomId);
      }
    }
  }
}
```

Deploy rules (or they will run in emulator only):
```bash
firebase deploy --only firestore:rules
```

---

## 6) Emulator Suite (Local Development)

Start all emulators locally:
```bash
firebase emulators:start
```

Run the web app in another terminal (example with Vite):
```bash
npm run -w web dev     # or pnpm -C web dev / yarn workspace web dev
```

The app should connect to your Firebase project (or to emulators if you configured emulator targets in code).

---

## 7) Production Usage

- The web client is hosted outside Firebase. Build and deploy with your preferred provider (e.g., Vercel/Netlify/Cloudflare Pages).
- Ensure the production deployment uses the correct `.env` values pointing to the live Firebase project.

Build example:
```bash
npm run -w web build
```

Deploy using your hosting provider’s workflow.

---

**Done.** Your Firebase services are now configured for this project.