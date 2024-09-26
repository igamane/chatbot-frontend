import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIJQGJ30eN3AXr9H4DRGpevDLyC3PNkjw",
  authDomain: "mjtest-c0247.firebaseapp.com",
  projectId: "mjtest-c0247",
  storageBucket: "mjtest-c0247.appspot.com",
  messagingSenderId: "1012135636621",
  appId: "1:1012135636621:web:0af78f6b5d3af1eec63cc4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
