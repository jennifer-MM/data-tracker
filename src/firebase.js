import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

//firebase init- config 

const firebaseConfig = {
    apiKey: "AIzaSyCS6W1gb-jVFUeH46zHuvVvjZzjogNc-Xg",
    authDomain: "data-app-72cac.firebaseapp.com",
    databaseURL: "https://data-app-72cac.firebaseio.com",
    projectId: "data-app-72cac",
    storageBucket: "data-app-72cac.appspot.com",
    messagingSenderId: "672270545754",
    appId: "1:672270545754:web:535bd57500b96e214d3963",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //utils
  const db = firebase.firestore()
  const auth = firebase.auth()

  //collection references
  const usersCollection = db.collection('users')
  const chartCollection =db.collection('chart')
  
  //export utils/refs
  export {
      db,
      auth,
      usersCollection,
      chartCollection
  }