import firebase from 'firebase';

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyDn7ib2WJP9Cv8tHPeITI30zqh8z0rUIZk",
    authDomain: "fun-food-friends-77799.firebaseapp.com",
    databaseURL: "https://fun-food-friends-77799.firebaseio.com",
    projectId: "fun-food-friends-77799",
    storageBucket: "fun-food-friends-77799.appspot.com",
    messagingSenderId: "823352638583",
    appId: "1:823352638583:web:b1eef64ca4efe0beab5a72",
    measurementId: "G-PJWPCBS8LQ"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export default firebase;
