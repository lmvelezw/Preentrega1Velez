import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFS17V99MfKXn6hE_1E3HOIEHWU4-KRho",
  authDomain: "pf-react-coder-d3af4.firebaseapp.com",
  projectId: "pf-react-coder-d3af4",
  storageBucket: "pf-react-coder-d3af4.appspot.com",
  messagingSenderId: "54099689184",
  appId: "1:54099689184:web:c19980c058a42ae8289a85"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);