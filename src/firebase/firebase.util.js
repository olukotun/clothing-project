import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxEDh62PsXPeIBTqchmJYkdTEA5gGQ8B8',
  authDomain: 'clothing-db-999ad.firebaseapp.com',
  projectId: 'clothing-db-999ad',
  storageBucket: 'clothing-db-999ad.appspot.com',
  messagingSenderId: '919325970913',
  appId: '1:919325970913:web:4ca9731591b3689ece02a0',
  measurementId: 'G-8RFD1PZPPS',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //we want to perform a create when we get a userAuth hence the need to the check below
  if (!userAuth) return;
  //firstore.collection('user).doc('id')
  const userRef = firestore.doc(`users/${userAuth.uid}`); // document reference give use path to document or collection
  // always remember documentref is used for performing crud operation
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    // crud is provided using the document reference
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);  // we the twitter and others

export default firebase;
