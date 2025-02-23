// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9yhS4-P-8It9ozc-IDCqrpLeqgopljmc",
  authDomain: "b10a9-discountpro-c005.firebaseapp.com",
  projectId: "b10a9-discountpro-c005",
  storageBucket: "b10a9-discountpro-c005.firebasestorage.app",
  messagingSenderId: "1086829222444",
  appId: "1:1086829222444:web:e3f99ced557db062a80f89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;