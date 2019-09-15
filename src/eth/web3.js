import Web3 from 'web3';


let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  console.log("Using metamask");
  web3 = new Web3(window.web3.currentProvider);
  const accounts = web3.eth.getAccounts().then(
    function() {
      console.log("Account unlocked");
    }
  );
} //else {
//   // We are on the server *OR* the user is not running metamask
//   console.log("Using infura!");
//   const provider = new Web3.providers.HttpProvider(
//     'https://rinkeby.infura.io/v3/c8ec1de8ac534efcadab78ab0d0619ed'
//   );

//   web3 = new Web3(provider);
// }

export default web3;