// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoLV5MaYddtH_GZ5O-ZTsUYTnSFEou9Zk",
  authDomain: "localmarketplace-80a4d.firebaseapp.com",
  projectId: "localmarketplace-80a4d",
  storageBucket: "localmarketplace-80a4d.appspot.com",
  messagingSenderId: "1081911975775",
  appId: "1:1081911975775:web:ef49eac350c5ee03ad20ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);