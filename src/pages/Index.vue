<template>
  <q-page class="flex flex-center">
    <div>
  <h3> God Wants to Make You Rich, Only if you take Action
    
  </h3>
  <div align="center">
   <img :src="imgurl" width="50px"  /> <br>
   <q-btn label="Enter The Pump Lottery" v-on:click="enterlottery" />
    </div>
    <div>Participants
      <div v-for="(dd, index) in lotterybox" :key="index" class="row">

          <div class="row">
            
          
            <ul>
              <li>{{dd.name}}</li>
              </ul>
             
          </div>

      </div>
    </div>
    </div>
  </q-page>
   
</template>

<script>
import web3 from '../js/web3';
 
  //return false;

  const objad="0x4834f3abda04b0fa5e807ba82abfaa83c576a42b";

    const ab=[
	{
		"constant": false,
		"inputs": [],
		"name": "enterlottery",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "winner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			}
		],
		"name": "won",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "randmno",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "viewbal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const lottery= new web3.eth.Contract(ab,objad)

import VueFirestore from 'vue-firestore'
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

export default {
  name: 'PageIndex',
 meta:{title:"Pump Lottery"},
  data () {
    return {
      lotterybox:[],
     imgurl:"https://www.forsage.io/img/photos/cat_figure.svg",
     imgsrc:"assets/quasar-logo-full.svg"
      
    }},
    mounted:function(){
        this.filllotterybox()
    },
 computed:{
   trxhash(){
     return this.$store.state.trxhash
   },
   
 },methods:{
   filllotterybox(){
     const tumtum=this
    db.collection("persons").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //this.lotterybox =doc.data()
        tumtum.lotterybox.push(doc.data())
        console.log(doc.id, " => ", doc.data());
    });
});

    
   },
     enterlottery(){
       
       let alc=window.web3.currentProvider.selectedAddress

      //eventjoin=lottery.

       lottery.methods.enterlottery().send({
         from:alc,
         value:web3.utils.toWei("0.5",'ether')

       }).then(kk=>{
         console.log(kk)
         db.collection("persons").add({name:kk.transactionHash}).then(kk=>{
        alert(kk)
      })

         this.$store.dispatch("addtxthash",kk.transactionHash)
         
       })
      
    },
    checkfirestore(){
      this.filllotterybox()
      
    }
 }
}
</script>
