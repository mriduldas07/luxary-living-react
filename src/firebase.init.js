// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaZlejfrD6FM4VxXlTWayGSbZlMA2au6U",
  authDomain: "luxury-living-d8ff8.firebaseapp.com",
  projectId: "luxury-living-d8ff8",
  storageBucket: "luxury-living-d8ff8.appspot.com",
  messagingSenderId: "671059998981",
  appId: "1:671059998981:web:da9d9d01fdb63bc0c9df6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;