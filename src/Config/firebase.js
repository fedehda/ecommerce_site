import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCFKjWrSk-DTFvUTAZLNN2QOlWlMMvwHu4",
  authDomain: "reacttestutn.firebaseapp.com",
  projectId: "reacttestutn",
  storageBucket: "reacttestutn.appspot.com",
  messagingSenderId: "142653779245",
  appId: "1:142653779245:web:8d51aa8471aa9cee61b7a4"
};

firebase.initializeApp(config);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();


export default firebase