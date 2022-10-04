
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo0IMAm624aobmVrcXmHvMDJdMI1Ciui0",
  authDomain: "portfolio-d3c04.firebaseapp.com",
  projectId: "portfolio-d3c04",
  storageBucket: "portfolio-d3c04.appspot.com",
  messagingSenderId: "603901683278",
  appId: "1:603901683278:web:00045d62036534bcbb051f",
  measurementId: "G-J0P6H9VSJE"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);