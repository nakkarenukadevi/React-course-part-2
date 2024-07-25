// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3_BEIGXwcxwQWLvNWYYIRAcFtnbXZw4s",
    authDomain: "netfilx-2.firebaseapp.com",
    projectId: "netfilx-2",
    storageBucket: "netfilx-2.appspot.com",
    messagingSenderId: "771634400997",
    appId: "1:771634400997:web:8437ea1dd250c8307fce0c",
    measurementId: "G-X8KP4HYQHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()