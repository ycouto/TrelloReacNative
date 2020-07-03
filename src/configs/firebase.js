import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDdOdou3dQQ8E6bIS1o1-QcoSr8Nt0YsqI",
    authDomain: "trello-faf6f.firebaseapp.com",
    databaseURL: "https://trello-faf6f.firebaseio.com",
    projectId: "trello-faf6f",
    storageBucket: "trello-faf6f.appspot.com",
    messagingSenderId: "438859667323",
    appId: "1:438859667323:web:bbd87ab274b868062c0fde",
    measurementId: "G-1XYN9KPS3N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export const database = firebase.firestore();