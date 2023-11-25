// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-ub8iR0einFfe62gk_BqLRL3ftU2d_8M",
    authDomain: "reactjs-project-crud-dito.firebaseapp.com",
    projectId: "reactjs-project-crud-dito",
    storageBucket: "reactjs-project-crud-dito.appspot.com",
    messagingSenderId: "127402536762",
    appId: "1:127402536762:web:5b2123add9d01d7cadea03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}