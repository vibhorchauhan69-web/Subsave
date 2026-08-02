import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "subsave-31833.firebaseapp.com",
  projectId: "subsave-31833",
  storageBucket: "subsave-31833.firebasestorage.app",
  messagingSenderId: "867748530449",
  appId: "1:867748530449:web:f6c77c552babcf7a2ba4b0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;