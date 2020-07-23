
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
const db=firebase.firestore();

 function filllotterybox(){
    const tumtum=this
   db.collection("persons").get().then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
       // doc.data() is never undefined for query doc snapshots
       //this.lotterybox =doc.data()
       return doc.data()
       
      // console.log(doc.id, " => ", doc.data());
   });
});
};

function addintoperson(alc){
    db.collection("persons").add({name:alc}).then(kk=>{
        console.log(kk)
    })
}

export default{filllotterybox,addintoperson}