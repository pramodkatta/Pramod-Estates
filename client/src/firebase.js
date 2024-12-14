// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pramodestates-1ece4.firebaseapp.com",
  projectId: "pramodestates-1ece4",
  storageBucket: "pramodestates-1ece4.firebasestorage.app",
  messagingSenderId: "781019023608",
  appId: "1:781019023608:web:70c8d2dc05272183df930d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);