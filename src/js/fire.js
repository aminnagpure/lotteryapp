
import firebase from 'firebase'



    
 
require('firebase/firestore')


  const firebaseConfig = {
  apiKey: "AIzaSyAAm-5bCOVlzXeJFb_AxUPLEHZl66dkvxc",
  authDomain: "ether-51ed0.firebaseapp.com",
  databaseURL: "https://ether-51ed0.firebaseio.com",
  projectId: "ether-51ed0",
  storageBucket: "ether-51ed0.appspot.com",
  messagingSenderId: "258682462546",
  appId: "1:258682462546:web:6261f189323f581a9a5a8b"
};
 
  // Initialize Firebase.
firebase.initializeApp(firebaseConfig);


export default firebase