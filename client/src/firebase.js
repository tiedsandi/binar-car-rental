import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "binar-car-rental-49891.firebaseapp.com",
    projectId: "binar-car-rental-49891",
    storageBucket: "binar-car-rental-49891.appspot.com",
    messagingSenderId: "907209074847",
    appId: "1:907209074847:web:357515d5aea67535a49aaa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
