import firebase from "firebase/compat";


 const firebaseConfig = {
    apiKey: "AIzaSyA0uM7e6we7OAYivf4yFiAYz3uSQcSyh2I",
    authDomain: "instagram-clone-react-581e5.firebaseapp.com",
    projectId: "instagram-clone-react-581e5",
    storageBucket: "instagram-clone-react-581e5.appspot.com",
    messagingSenderId: "460274526316",
    appId: "1:460274526316:web:b430cd328a45ca4c8f5049",
    measurementId: "G-NPX3WDLPJ2" 
 };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();

export { db, auth, storage};