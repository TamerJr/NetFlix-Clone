// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeeA1ho_m20QMnauJbGT8tznWFQJTTU9A",
  authDomain: "netflix-clone-d571f.firebaseapp.com",
  projectId: "netflix-clone-d571f",
  storageBucket: "netflix-clone-d571f.appspot.com",
  messagingSenderId: "921776652722",
  appId: "1:921776652722:web:4a48c925492391eccd24ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)