
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBdd65kQ0GZgCcs7q_si-49fi5AHh5Vfug",
    authDomain: "crwn-crwn-c9064.firebaseapp.com",
    databaseURL: "https://crwn-crwn-c9064.firebaseio.com",
    projectId: "crwn-crwn-c9064",
    storageBucket: "crwn-crwn-c9064.appspot.com",
    messagingSenderId: "764979844316",
    appId: "1:764979844316:web:4a2dd3a8dc88c264cf1019",
    measurementId: "G-2T1YTDH4QQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
