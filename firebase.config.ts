import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBi541hAaU60ioezF8nvRLWqJ1tuVQ2v-0",
  authDomain: "skillforge-eb08a.firebaseapp.com",
  projectId: "skillforge-eb08a",
  storageBucket: "skillforge-eb08a.appspot.com",
  messagingSenderId: "592989984171",
  appId: "1:592989984171:web:2ff7a0ddf5ec58ad932eee",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
