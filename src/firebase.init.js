// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiSCQs9VfxjB_VsjdH0v_vjvfxnljTaLI",
  authDomain: "mahiuddin-habib-portfolio.firebaseapp.com",
  projectId: "mahiuddin-habib-portfolio",
  storageBucket: "mahiuddin-habib-portfolio.appspot.com",
  messagingSenderId: "763555837089",
  appId: "1:763555837089:web:138660384fe6e8ba63ace0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;