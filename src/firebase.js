import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCQYE4QfjOqrGBqs7v94HWxaFgrCA4TwMo",
    authDomain: "cyberbar-repair-shop-database.firebaseapp.com",
    projectId: "cyberbar-repair-shop-database",
    storageBucket: "cyberbar-repair-shop-database.appspot.com",
    messagingSenderId: "1035594496079",
    appId: "1:1035594496079:web:6d7a6d2c1e4c0fbf8c123a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };