
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


/// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcJmn_VYAdFAzPb0b7lFVi7B9G1q4X5Ig",
    authDomain: "it36-purol.firebaseapp.com",
    projectId: "it36-purol",
    storageBucket: "it36-purol.appspot.com",
    messagingSenderId: "192382429629",
    appId: "1:192382429629:web:0a084268eccf1cfc784ad4",
    measurementId: "G-SM189V2Z08"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}
