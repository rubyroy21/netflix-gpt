// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD97GaBUdtRIHNDiJOICFEqlw_swgD7yTw",
  authDomain: "netflixgpt-4110d.firebaseapp.com",
  projectId: "netflixgpt-4110d",
  storageBucket: "netflixgpt-4110d.appspot.com",
  messagingSenderId: "230328416134",
  appId: "1:230328416134:web:a85ec0e69fee929c631e07",
  measurementId: "G-83Z6RJVWLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
