import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCxrLkLKZndUx4-1rZD86QzmjTU6spVkMM",
    authDomain: "crwn-db-8cd75.firebaseapp.com",
    databaseURL: "https://crwn-db-8cd75.firebaseio.com",
    projectId: "crwn-db-8cd75",
    storageBucket: "crwn-db-8cd75.appspot.com",
    messagingSenderId: "1075926634114",
    appId: "1:1075926634114:web:9124e4e1351d0362642e9b"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
