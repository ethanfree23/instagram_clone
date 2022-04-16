import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBALeufRF7meRQEs-aMKg3hx4Y6LUIYuFE",
    authDomain: "instagram-clone-react-e18f9.firebaseapp.com",
    projectId: "instagram-clone-react-e18f9",
    storageBucket: "instagram-clone-react-e18f9.appspot.com",
    messagingSenderId: "355022939223",
    appId: "1:355022939223:web:3808ca834312fad50bef12",
    measurementId: "G-X9CSSXWYEZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };