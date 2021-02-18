import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC9pZJf2PSviczkT1jA4OxnkLerE2p8kro",
    authDomain: "twodduk-37b88.firebaseapp.com",
    projectId: "twodduk-37b88",
    storageBucket: "twodduk-37b88.appspot.com",
    messagingSenderId: "491339282283",
    appId: "1:491339282283:web:bae8383609579d54c8be2e"
  };

  firebase.initializeApp(firebaseConfig);
  export const  storageService=firebase.storage();