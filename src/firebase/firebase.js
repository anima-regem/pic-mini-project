
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBHGtkjlvn8WMf2lJ2UeuOFQhIrYs8wyc",
  authDomain: "pic-miniproject.firebaseapp.com",
  projectId: "pic-miniproject",
  storageBucket: "pic-miniproject.appspot.com",
  messagingSenderId: "126143285060",
  appId: "1:126143285060:web:56295f89cdcd1d8428b911",
  measurementId: "G-Q3RQ9J3RJM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {auth, app, firestore, storage};
