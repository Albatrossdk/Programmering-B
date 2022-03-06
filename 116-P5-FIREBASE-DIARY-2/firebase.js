const firebaseConfig = {
    apiKey: "AIzaSyDEuHX1LUUCwnbk9XE0yB9wJd9t1ngzpy4",
    authDomain: "p5-diary-f6ea2.firebaseapp.com",
    projectId: "p5-diary-f6ea2",
    storageBucket: "p5-diary-f6ea2.appspot.com",
    messagingSenderId: "223511055528",
    appId: "1:223511055528:web:07de6c0c830e51814a469d"
  };

//start firebase
firebase.initializeApp(firebaseConfig) 
const db = firebase.firestore()

