// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD2FVt7XxRprASGlwUpjw1Gr-MX90y87o",
  authDomain: "legendarysnakegame.firebaseapp.com",
  projectId: "legendarysnakegame",
  storageBucket: "legendarysnakegame.appspot.com",
  messagingSenderId: "195664005495",
  appId: "1:195664005495:web:0fbc533b520d6d3ce23972",
  measurementId: "G-M0ELH53ZT6"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Google Auth provider
const googleProvider = new GoogleAuthProvider();

// Export the initialized services to use in other parts of your app
export {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  setDoc,
  doc
};
