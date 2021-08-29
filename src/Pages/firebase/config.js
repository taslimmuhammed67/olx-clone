import firebase from "firebase";
import 'firebase/firebase-auth';
import "firebase"
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBlyLEApDC91jCT3iJ6cJvPftivhTdP8_4",
    authDomain: "fir-4723b.firebaseapp.com",
    projectId: "fir-4723b",
    storageBucket: "fir-4723b.appspot.com",
    messagingSenderId: "959089131729",
    appId: "1:959089131729:web:a4795a32db3cf4010a05f0",
    measurementId: "G-47FEYEN1XZ"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);