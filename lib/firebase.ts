import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "donbosco-ff4ac.firebaseapp.com",
  projectId: "donbosco-ff4ac",
  storageBucket: "donbosco-ff4ac.firebasestorage.app",
  messagingSenderId: "178887276658",
  appId: "1:178887276658:web:c9d19583c16d9c74c4aaeb",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);