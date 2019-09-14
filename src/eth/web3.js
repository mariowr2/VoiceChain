import Web3 from 'web3';


// const ganache = require('ganache-cli');
// const web3  = new Web3(ganache.provider()); 

//uncomment to use real ethereum test net
let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/c8ec1de8ac534efcadab78ab0d0619ed'
  );

  web3 = new Web3(provider);
}

export default web3;