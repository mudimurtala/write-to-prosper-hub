import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHUq0FE5NxvLBA5oObyPZ8aY5mqHdqHDA",
  authDomain: "writerpreneur-academy.firebaseapp.com",
  projectId: "writerpreneur-academy",
  storageBucket: "writerpreneur-academy.firebasestorage.app",
  messagingSenderId: "221383915792",
  appId: "1:221383915792:web:d7e9eb8a320e35739f8d95",
};

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

/** Only initializes Firebase in the browser — never during server rendering. */
function getFirebaseApp(): FirebaseApp {
  if (typeof window === "undefined") {
    throw new Error("Firebase can only be used in the browser.");
  }
  if (!app) {
    const existing = getApps();
    app = existing.length > 0 ? existing[0]! : initializeApp(firebaseConfig);
  }
  return app;
}

export function getFirebaseAuth(): Auth {
  if (!authInstance) {
    authInstance = getAuth(getFirebaseApp());
  }
  return authInstance;
}

export function getFirebaseDb(): Firestore {
  if (!dbInstance) {
    dbInstance = getFirestore(getFirebaseApp());
  }
  return dbInstance;
}
