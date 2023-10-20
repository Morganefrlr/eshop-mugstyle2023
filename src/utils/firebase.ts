// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "mugstyle-402307.firebaseapp.com",
  projectId: "mugstyle-402307",
  storageBucket: "mugstyle-402307.appspot.com",
  messagingSenderId: "521769617527",
  appId: "1:521769617527:web:edcbc334e77eb832075e72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);