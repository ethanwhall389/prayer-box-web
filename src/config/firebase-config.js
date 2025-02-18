// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYyPjQ0tb-DKu7mxCbKJWZPrsWBR_AL9s",
  authDomain: "prayer-box-7f78c.firebaseapp.com",
  projectId: "prayer-box-7f78c",
  storageBucket: "prayer-box-7f78c.firebasestorage.app",
  messagingSenderId: "46295454184",
  appId: "1:46295454184:web:4e3aa317d79c6e6fa5145d",
  measurementId: "G-MYHKCHGZLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
export const providerEmail = new EmailAuthProvider();

// To deploy to hosting:
    // firebase login
    // firebase init
    // firebase deploy