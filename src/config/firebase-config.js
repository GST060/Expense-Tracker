// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Jjxqu671y7R1739NT0uqr91aLsvU4_g",
  authDomain: "expense-tracker-86789.firebaseapp.com",
  projectId: "expense-tracker-86789",
  storageBucket: "expense-tracker-86789.firebasestorage.app",
  messagingSenderId: "270270851442",
  appId: "1:270270851442:web:e2a0d7081d3e44eba455eb",
  measurementId: "G-305J9HYK8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// firebase login
// firebase init
// firebase deploy