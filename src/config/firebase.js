import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBgrqmlEn5F5_iYGmyAUXaTdmnO1Go3HZA",
    authDomain: "crud-basic-e9bf7.firebaseapp.com",
    projectId: "crud-basic-e9bf7",
    storageBucket: "crud-basic-e9bf7.appspot.com",
    messagingSenderId: "889094557551",
    appId: "1:889094557551:web:c084fb9a921e8e15cf229a"
  };

  firebase.initializeApp(firebaseConfig);

  export { firebase }