
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkyQYn7vRKXacVfDgITMN1Krd4aWSSGh4",
  authDomain: "react-ecommerce-297e3.firebaseapp.com",
  projectId: "react-ecommerce-297e3",
  storageBucket: "react-ecommerce-297e3.appspot.com",
  messagingSenderId: "547792560559",
  appId: "1:547792560559:web:711fec7e5d80507e7d0f5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);