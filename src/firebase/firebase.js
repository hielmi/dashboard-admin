// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAv-5UME1SP9FgSrf0gaAGIZUIeOHpIewQ",
  authDomain: "puskesmas-3583c.firebaseapp.com",
  databaseURL: "https://puskesmas-3583c-default-rtdb.firebaseio.com",
  projectId: "puskesmas-3583c",
  storageBucket: "puskesmas-3583c.appspot.com",
  messagingSenderId: "214537261969",
  appId: "1:214537261969:web:7c3707a0ef7e6059074030",
  measurementId: "G-WYF29PXLZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };

// apiKey: "AIzaSyAv-5UME1SP9FgSrf0gaAGIZUIeOHpIewQ",
// authDomain: "puskesmas-3583c.firebaseapp.com",
// databaseURL: "https://puskesmas-3583c-default-rtdb.firebaseio.com",
// projectId: "puskesmas-3583c",
// storageBucket: "puskesmas-3583c.appspot.com",
// messagingSenderId: "214537261969",
// appId: "1:214537261969:web:7c3707a0ef7e6059074030",
// measurementId: "G-WYF29PXLZC"
