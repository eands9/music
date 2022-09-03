import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlmPJtX2Q2yyvMem5qXY6j71tRGZ0ZJLo",
  authDomain: "music-77399.firebaseapp.com",
  projectId: "music-77399",
  storageBucket: "music-77399.appspot.com",
  appId: "1:837962336272:web:9d37f5ebc158e87c3a2295",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export { auth, db, usersCollection };
