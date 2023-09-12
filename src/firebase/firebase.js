// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBaQmNP25WpMzVa5-Kt604lJI38O3j1Rtw",
  authDomain: "testing-34c86.firebaseapp.com",
  databaseURL: "https://testing-34c86-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testing-34c86",
  storageBucket: "testing-34c86.appspot.com",
  messagingSenderId: "90174711557",
  appId: "1:90174711557:web:e7755090c5a39a3717f96c",
  measurementId: "G-6T37PV4LSF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);

// apiKey: "AIzaSyAv-5UME1SP9FgSrf0gaAGIZUIeOHpIewQ",
// authDomain: "puskesmas-3583c.firebaseapp.com",
// databaseURL: "https://puskesmas-3583c-default-rtdb.firebaseio.com",
// projectId: "puskesmas-3583c",
// storageBucket: "puskesmas-3583c.appspot.com",
// messagingSenderId: "214537261969",
// appId: "1:214537261969:web:7c3707a0ef7e6059074030",
// measurementId: "G-WYF29PXLZC"