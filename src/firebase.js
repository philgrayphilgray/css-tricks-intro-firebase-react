import firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDZCMa7HOM0Xw9qCFfl7LbYeElqLpR0yEc",
    authDomain: "fun-food-friends-77292.firebaseapp.com",
    databaseURL: "https://fun-food-friends-77292.firebaseio.com",
    projectId: "fun-food-friends-77292",
    storageBucket: "",
    messagingSenderId: "182849222172"
  };

  firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
  export default firebase;
