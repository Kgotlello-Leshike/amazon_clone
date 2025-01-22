import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEwiFuQmOK1fR0o1L8n5DttNWlvHIBNZk",
    authDomain: "clone-kml.firebaseapp.com",
    projectId: "clone-kml",
    storageBucket: "clone-kml.firebasestorage.app",
    messagingSenderId: "230474930362",
    appId: "1:230474930362:web:554b76c7bf5ae92d860a83",
    measurementId: "G-FWBBXKLX0Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth()

  export {db, auth}