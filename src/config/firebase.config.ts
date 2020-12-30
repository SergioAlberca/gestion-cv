import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCFgz1E4my6RqTJnyG-baMTSlUhs3IChJM",
  authDomain: "cv-sergio-alberca.firebaseapp.com",
  databaseURL: "https://cv-sergio-alberca.firebaseio.com",
  projectId: "cv-sergio-alberca",
  storageBucket: "cv-sergio-alberca.appspot.com",
  messagingSenderId: "968040623132",
  appId: "1:968040623132:web:19d0f17b4516346fd8c3d9",
  measurementId: "G-1X43MVP8CY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
