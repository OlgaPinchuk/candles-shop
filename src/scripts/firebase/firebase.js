// NPM packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqWyYbWqDECzUq9nwMl80JSMmnAf1hOg0",
  authDomain: "candles-shop-828f5.firebaseapp.com",
  projectId: "candles-shop-828f5",
  storageBucket: "candles-shop-828f5.appspot.com",
  messagingSenderId: "319043509313",
  appId: "1:319043509313:web:da237861886ec598c13ac0"
};

// Initialize Firebase
const firebaseInstance = initializeApp(firebaseConfig);

export const fireStoreDatabase = getFirestore(firebaseInstance);
export const storageInstance = getStorage(firebaseInstance);