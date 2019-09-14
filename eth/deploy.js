const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//create an instance of the wallet using the mnemonic
const provider = new HDWalletProvider(
    'talk across spread around slender leopard sea card trial below trade ride',
    'https://rinkeby.infura.io/v3/c8ec1de8ac534efcadab78ab0d0619ed'
);

//web3 is now enabled to use my account to do any action on the rinkeby network
const web3 = new Web3(provider);

//deployment function in async function to use await
const deploy = async () => {
    const accounts = await web3.eth.getAccounts(); //get the accounts
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['joni bravo'] })
    .send({ gas: '1000000', from: accounts[0] }); //deploy!
    console.log('Contract deployed to ', result.options.address); //address of the contract!
};

deploy(); //DEPLOY
