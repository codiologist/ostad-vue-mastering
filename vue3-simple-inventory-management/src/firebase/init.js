// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoyhVc4P8rAvl5nGxOjfWdZHT9r8Dxuew",
  authDomain: "auth-assignment-6a579.firebaseapp.com",
  projectId: "auth-assignment-6a579",
  storageBucket: "auth-assignment-6a579.appspot.com",
  messagingSenderId: "304160407736",
  appId: "1:304160407736:web:b058042817991377cdf44d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app)
export const auth = getAuth(app)


export function getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }