<template>
  <q-page class="flex flex-center">
    <div>
  <h3> God Wants to Make You Rich, Only if you take Action {{lotterybal}}
    {{ethaddress[0]}}
  </h3>
  <div align="center">
   <img :src="imgurl" width="50px"  /> <br>
   <div v-if="metamaskcheck">
   <q-btn label="Enter The Pump Lottery" v-on:click="enterlottery" />
   </div>
   <div v-else>
   <q-btn label="Install metamask to play lottery"  /> <br><br>
   <a href="http://www.metamask.io">Click here to install metamask</a>
   </div>
    </div>
    <div>Participants <q-btn label="Enter The Pump Lottery"  />
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

 import fire from '../js/fire';
  //return false;
 import Web3 from 'web3'
// import lottery from '../js/lottery';
//const lottery= new web3.eth.Contract(ab,objad)
let web3;

if (typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running
 web3 = new Web3(window.web3.currentProvider); 
 // alert('n type')
}else{
   //metamaskmsg="memask not installed" 
  // alert("memask not installed" )
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/f8ad46d404124919926cf5d925a939a6'
  );
  web3 = new Web3(provider);
}

const objad = '0x3b348EcBe62c884b5114349968B1ce5f0Ef6F5b1';

const ab=[
	{
		"inputs": [],
		"name": "enterlottery",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "winner",
		"outputs": [],
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
		"inputs": [],
		"name": "numberofmembers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randmno",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewbal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const lottery=new web3.eth.Contract(ab,objad);

export default {
  
  name: 'PageIndex',
 meta:{title:"Pump Lottery"},
  data () {
    return {
      lotterybox:[],
      metamask:'',
      msgclick:'',
     imgurl:"https://www.forsage.io/img/photos/cat_figure.svg",
     imgsrc:"assets/quasar-logo-full.svg",
      ethaddress:'',
      lotterybal:0
    }},
    mounted:function(){
       // this.filllotterybox()
       this.lotterybox.push(fire.filllotterybox)
    },
    
 computed:{
   trxhash(){
     return this.$store.state.trxhash
   },metamaskcheck(){
     return this.$store.state.metamaskInstalled
   },
   

   
 },
 created:async function(){

this.lotterybal= await lottery.methods.viewbal().call()
//this.ethaddress= await ethereum.request({ method: 'eth_requestAccounts' });



 },
 methods:{    
   
 async enterlottery(){    
   
    
   const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];
       //let alc=web3.currentProvider.
  //alert(web3.eth.personal.getAccounts)
      //alert(account)
      let res=await lottery.methods.enterlottery().send({
         from:account,
         value:web3.utils.toWei("0.5",'ether')

       }).then(kk=>{
         console.log(kk)
        // db.collection("persons").add({name:alc}).then(kk=>{
       
      })

      this.$store.dispatch("addtxthash",account)
       fire.addintoperson(account)  
           
      console.log(res.events)

    }
}}
</script>
