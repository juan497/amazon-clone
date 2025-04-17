import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDG5UoN3oDctxHwsvbngyVTveZtScq8SDk",
    authDomain: "cl-1fd6c.firebaseapp.com",
    projectId: "cl-1fd6c",
    storageBucket: "cl-1fd6c.firebasestorage.app",
    messagingSenderId: "1097125130023",
    appId: "1:1097125130023:web:3152037b4b21ab19830302",
    measurementId: "G-72PZ21VX76"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };