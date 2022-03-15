import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGdv23grq87XorxAHBlHV3Syo2s43LjnU",
    authDomain: "instagram-clone-913af.firebaseapp.com",
    projectId: "instagram-clone-913af",
    storageBucket: "instagram-clone-913af.appspot.com",
    messagingSenderId: "289818882769",
    appId: "1:289818882769:web:df4beac979db33724a0bf0",
    measurementId: "G-F9352F04HZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };