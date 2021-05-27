import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyAxEDh62PsXPeIBTqchmJYkdTEA5gGQ8B8',
  authDomain: 'clothing-db-999ad.firebaseapp.com',
  projectId: 'clothing-db-999ad',
  storageBucket: 'clothing-db-999ad.appspot.com',
  messagingSenderId: '919325970913',
  appId: '1:919325970913:web:4ca9731591b3689ece02a0',
  measurementId: 'G-8RFD1PZPPS',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
