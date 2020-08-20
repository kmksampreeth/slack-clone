import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDV-g201mJh3kgKegzzrzPQyZuDqlxjBgA",
    authDomain: "theproochat.firebaseapp.com",
    databaseURL: "https://theproochat.firebaseio.com",
    projectId: "theproochat",
    storageBucket: "theproochat.appspot.com",
    messagingSenderId: "365886938029",
    appId: "1:365886938029:web:b6ff26ae119703de029f24",
    measurementId: "G-PJEXJGJGJY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
  