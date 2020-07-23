import Web3 from 'web3';


//import { store } from 'quasar/wrappers';



let web3;

if (typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  
  
}else{
   //metamaskmsg="memask not installed" 
   alert("memask not installed" )
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/f8ad46d404124919926cf5d925a939a6'
  );
  web3 = new Web3(provider);
}

export default web3