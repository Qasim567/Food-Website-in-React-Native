// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Sqpev0yuXo-C7vbSz2YHFYRLwtQcNbI",
  authDomain: "project-fd0ee.firebaseapp.com",
  projectId: "project-fd0ee",
  storageBucket: "project-fd0ee.appspot.com",
  messagingSenderId: "547049774919",
  appId: "1:547049774919:web:ee46683de242f67f28f662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app);