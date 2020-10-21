import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

// Replace your firebaseConfig object here.
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Replace your firebaseConfig object here.

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
// const db = firebase.firestore();
// const rt = firebase.database();

const auth = firebase.auth();

export { auth };

// export { auth, db, rt }

// Use whatever feature you want and then export it
