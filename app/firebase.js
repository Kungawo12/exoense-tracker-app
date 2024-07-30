// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdBG5h5mBQsoHzXaEQfuz4SNLVRMIx1NQ",
  authDomain: "expense-tracker-53edd.firebaseapp.com",
  projectId: "expense-tracker-53edd",
  storageBucket: "expense-tracker-53edd.appspot.com",
  messagingSenderId: "722114158693",
  appId: "1:722114158693:web:f2f00cd106ced7c23b268c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);