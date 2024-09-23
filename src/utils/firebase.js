// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBevjKSdVygsb3JnvQfKNoK2MASm1cGQjE",
  authDomain: "netflixgpt-2c1a7.firebaseapp.com",
  projectId: "netflixgpt-2c1a7",
  storageBucket: "netflixgpt-2c1a7.appspot.com",
  messagingSenderId: "567334442570",
  appId: "1:567334442570:web:770b6abedc4726ee8178b3",
  measurementId: "G-96NP364RGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
