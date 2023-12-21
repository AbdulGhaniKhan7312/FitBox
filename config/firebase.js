// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYwMIR14X_SY8WrBg8VRFyzMons6XkcEk",
  authDomain: "fitbox-55cad.firebaseapp.com",
  projectId: "fitbox-55cad",
  storageBucket: "fitbox-55cad.appspot.com",
  messagingSenderId: "635609844734",
  appId: "1:635609844734:web:e900a8c97deee65350ceaf",
  measurementId: "G-S00DBCGNEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);