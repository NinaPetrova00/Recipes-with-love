// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// for authentication
import { getAuth } from 'firebase/auth';
// for CRUD
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7vKi4TECharp7n8b3owxfAix6cZSutLQ",
    authDomain: "recipes-with-love.firebaseapp.com",
    projectId: "recipes-with-love",
    storageBucket: "recipes-with-love.appspot.com",
    messagingSenderId: "653760271589",
    appId: "1:653760271589:web:aeb2d0708338198294f00c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication
export const auth = getAuth(app);

// CRUD
export const db = getFirestore(app);
