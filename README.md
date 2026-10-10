# SIT313 Task P4 — DEV@Deakin Login and Registration

This project extends the supplied Task P3 React homepage with React Router, a shared DEV@Deakin navigation bar, Firebase Authentication, and a Firestore user profile collection.

## Requirements
- Node.js and npm
- A Firebase project
- Email/Password enabled in Firebase Authentication
- Cloud Firestore created in the Firebase console

## Run locally
1. Extract/open this folder in VS Code.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and fill in the Firebase Web app configuration values.
4. In Firebase Console, open **Authentication → Sign-in method** and enable **Email/Password**.
5. Create **Cloud Firestore**. The app writes profile documents to the `users` collection, using the Authentication UID as the document ID.
6. Configure Firestore rules so authenticated users can create/read only their own profile. For example, rules can use `request.auth.uid == userId` for a document under `/users/{userId}`. Review and deploy suitable rules before submission.
7. Run `npm run dev` and open the local URL printed in the terminal.
8. Run `npm run build` to check the production build.

## Features
- `/` — existing P3 homepage
- `/login` — login using Firebase Authentication
- `/signup` — validated registration, with profile details stored in Firestore
- Shared navigation and footer across routes

Passwords are handled by Firebase Authentication and are not saved in Firestore. Do not commit `.env` or `node_modules` to Git.
