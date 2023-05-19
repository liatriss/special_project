import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxuv0g1HkW30XXnayD1NydN2SdROo-CJ4",
  authDomain: "specialproject-311ad.firebaseapp.com",
  databaseURL: "https://specialproject-311ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "specialproject-311ad",
  storageBucket: "specialproject-311ad.appspot.com",
  messagingSenderId: "560611933735",
  appId: "1:560611933735:web:3900de4d6edefe233a5802",
  measurementId: "G-Z1M4ETMV0P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
