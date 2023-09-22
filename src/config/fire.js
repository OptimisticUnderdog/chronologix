import { initializeApp } from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAm0nERt2fqIhuCa8zeua0VN-4CTPXAygE",
    authDomain: "chronologix-517a1.firebaseapp.com",
    projectId: "chronologix-517a1",
    storageBucket: "chronologix-517a1.appspot.com",
    messagingSenderId: "652111093876",
    appId: "1:652111093876:web:6865ff8cba2e5d9972f121"
};
const app = initializeApp(firebaseConfig);

export default app;

const signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful sign-up
      })
      .catch((error) => {
        // Handle sign-up errors
      });
  };
  
  const addDocument = (collectionName, data) => {
    const db = firebase.firestore();
    db.collection(collectionName).add(data)
      .then((docRef) => {
        // Handle successful addition
      })
      .catch((error) => {
        // Handle error
      });
  };