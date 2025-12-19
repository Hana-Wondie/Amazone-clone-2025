// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ZlPC7wcO_uNLuVz4-GDItesKXZXq3eE",
  authDomain: "clone-268ad.firebaseapp.com",
  projectId: "clone-268ad",
  storageBucket: "clone-268ad.firebasestorage.app",
  messagingSenderId: "27433447952",
  appId: "1:27433447952:web:9b8e31537fc9f69d641095",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

