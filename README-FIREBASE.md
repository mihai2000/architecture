Firebase deployment guide

1. Install Firebase CLI (if not already):

```bash
npm install -g firebase-tools
```

2. Login and select your Firebase project:

```bash
firebase login
firebase init hosting
# or link an existing project
firebase use --add
```

3. Provide your Firebase web app configuration as environment variables (recommended) in a `.env.local` file at the project root:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Build and export static files (this will create the `out` folder):

```bash
npm run build
```

5. Deploy to Firebase Hosting:

```bash
firebase deploy --only hosting
```

Notes:

- We configured Next.js to use `output: "export"` and `trailingSlash: true` so static export works with Firebase Hosting.
- If you prefer not to use environment variables, paste the Firebase config directly into `src/lib/firebase.ts` (not recommended for public repos).
