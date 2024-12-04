// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDCGr7Q12TUxpzqFc-jqtLD-qPk_iOjhJI",
  authDomain: "clone-324bf.firebaseapp.com",
  projectId: "clone-324bf",
  storageBucket: "clone-324bf.firebasestorage.app",
  messagingSenderId: "483205089745",
  appId: "1:483205089745:web:2765a257a6a9f6fde138f0",
  measurementId: "G-K64NCVE54R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { db, auth, analytics};