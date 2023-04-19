// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDQ9kDKbcCod8wxSv7THiNlXit6qtqoDw",
  authDomain: "ema-john-with-firebase-a-3b17c.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-3b17c",
  storageBucket: "ema-john-with-firebase-a-3b17c.appspot.com",
  messagingSenderId: "745736068760",
  appId: "1:745736068760:web:28eee8cd841261dbf97aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;