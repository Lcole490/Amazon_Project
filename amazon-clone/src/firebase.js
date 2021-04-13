import firebase from 'firebase'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBK6cgsmtV6qTqMSr4wGNzONSzy60a0PDU",
    authDomain: "clone-c34a6.firebaseapp.com",
    projectId: "clone-c34a6",
    storageBucket: "clone-c34a6.appspot.com",
    messagingSenderId: "792627170361",
    appId: "1:792627170361:web:49d8152eaca88cdc6411e8",
    measurementId: "G-QXSHN9VZD5"
  });




  const db = firebase.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, provider, auth }