import firebase from "firebase/app";
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'


const firebaseConfig = {

        apiKey: "AIzaSyA2WUeb5RecoBimDwGvCmkxtoQWjEZQzkE",
      
        authDomain: "teste-notifications-552f7.firebaseapp.com",
      
        projectId: "teste-notifications-552f7",
      
        storageBucket: "teste-notifications-552f7.appspot.com",
      
        messagingSenderId: "213587175518",
      
        appId: "1:213587175518:web:8eae28207df40e4e056ccf"
      
      };
      

firebase.initializeApp(firebaseConfig);
//const database = firebase.firestore()
export default firebase;