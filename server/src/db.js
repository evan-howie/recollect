// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHXGlXlm7BicUaEK77hSVYgO7F8A5qY9o",
  authDomain: "uofthacks11-d67d6.firebaseapp.com",
  projectId: "uofthacks11-d67d6",
  storageBucket: "uofthacks11-d67d6.appspot.com",
  messagingSenderId: "307922607669",
  appId: "1:307922607669:web:12f18a11a0ace265911b7c",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uofthacks11-d67d6.firebaseio.com",
});

const db = admin.firestore();

export default db;
