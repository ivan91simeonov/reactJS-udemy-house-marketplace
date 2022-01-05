// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRzLCypp6fmDsgTr4hRor9jDvpSXiANxw",
  authDomain: "house-marketplace-app-3fad1.firebaseapp.com",
  projectId: "house-marketplace-app-3fad1",
  storageBucket: "house-marketplace-app-3fad1.appspot.com",
  messagingSenderId: "264739722213",
  appId: "1:264739722213:web:3ff8266da44e17bb46550c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()