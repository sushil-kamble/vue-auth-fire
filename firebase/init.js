import * as firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsDp5QsqwCed5_i_qE5rz8NO2Pr2y25sg",
  authDomain: "vueauthfire.firebaseapp.com",
  databaseURL: "https://vueauthfire.firebaseio.com",
  projectId: "vueauthfire",
  storageBucket: "vueauthfire.appspot.com",
  messagingSenderId: "1080997394236",
  appId: "1:1080997394236:web:14e10a46e5305b14ce5039"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
// const db = firebase.firestore();
// const rt = firebase.database();

const auth = firebase.auth();

export { auth };

// export { auth, db, rt }

// Use whatever feature you want and then export it
