// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDABdK3JVUeR2vFBmVrUkC5GkmmkIciz0k",
    authDomain: "netfilx-e88a2.firebaseapp.com",
    projectId: "netfilx-e88a2",
    storageBucket: "netfilx-e88a2.appspot.com",
    messagingSenderId: "976163338802",
    appId: "1:976163338802:web:234b357dde1608d848da2b",
    measurementId: "G-18B8F2T9CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);