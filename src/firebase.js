import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC2c-y49r8TXmaqvsUNSRT_q1_7F5txIY",
    authDomain: "slack-clone-da9af.firebaseapp.com",
    projectId: "slack-clone-da9af",
    storageBucket: "slack-clone-da9af.appspot.com",
    messagingSenderId: "1057048875078",
    appId: "1:1057048875078:web:b7c0c300fde1d46845fa47",
    measurementId: "G-7LW71QBB3H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;