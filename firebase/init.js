import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

// REPLACE your firebaseConfig object here.
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};
// REPLACE your firebaseConfig object here.

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
// const db = firebase.firestore();
// const rt = firebase.database();

const auth = firebase.auth();

export { auth };

// export { auth, db, rt }

// Use whatever feature you want and then export it
