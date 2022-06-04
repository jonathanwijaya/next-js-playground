// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP-h8tyzd6zDO1R5K8tNv_QTmoCjp_GxY",
  authDomain: "netlflix-mock.firebaseapp.com",
  projectId: "netlflix-mock",
  storageBucket: "netlflix-mock.appspot.com",
  messagingSenderId: "952697607673",
  appId: "1:952697607673:web:700efd5128612f862c5928",
  measurementId: "G-CLL2FJ1JV3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
