import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const API_KEY = process.env.REACT_APP_FIREBASE_KEY;
const APP_ID = process.env.REACT_APP_FIREBASE_ID;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "whatsapp-clone-3769b.firebaseapp.com",
    projectId: "whatsapp-clone-3769b",
    storageBucket: "whatsapp-clone-3769b.appspot.com",
    messagingSenderId: "280399589598",
    appId: APP_ID,
    measurementId: "G-0EENBBZ47S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;