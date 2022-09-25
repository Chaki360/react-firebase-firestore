// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTrQXTJJcQFNaItpNjx8ZJCUtb9z1DyRQ",
    authDomain: "react-firebase-firestore-41607.firebaseapp.com",
    databaseURL: "https://react-firebase-firestore-41607-default-rtdb.firebaseio.com",
    projectId: "react-firebase-firestore-41607",
    storageBucket: "react-firebase-firestore-41607.appspot.com",
    messagingSenderId: "948701687927",
    appId: "1:948701687927:web:d48f9a2e53cf1b11005672"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();

