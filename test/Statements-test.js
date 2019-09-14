const assert = require('assert');
const ganache = require('ganache-cli'); //local ethereum network
const Web3 = require('web3'); //uper casse because we are requiring the constructor of Web3, 'web3 = new Web3()'
const web3  = new Web3(ganache.provider()); //create the instance and give the provider
//import compile from './eth/compile';



const compiledStatementFactory = require('../eth/build/StatementFactory.json');
const compiledStatement = require('../eth/build/Statement.json');

let accounts;
let statementFactory;
let statementContract;
let statementContractAddress;

//rinkeby.infura.io/v3/c8ec1de8ac534efcadab78ab0d0619ed
beforeEach(async () => {
    
    // Get a list of all accounts, use one of them to deploy the contract. Using the eth module of the web3 
    accounts = await web3.eth.getAccounts();

    console.log("deploying contract");
    statementFactory = await new web3.eth.Contract(compiledStatementFactory.abi)
    .deploy( { data : compiledStatementFactory.evm.bytecode.object}) //use the contract bytecode and the send args
    .send( {  from : accounts[0], gas: '2999999'});

    console.log("creating instance statement instance");
    
    //create a new instance of statement
    await statementFactory.methods.createStatement('hello world!', 'mario').send({
        from: accounts[1],
        gas: '1000000'
    });

    console.log("Getting address list");
    //get the list of adresses
    statementContractAddress = await statementFactory.methods.getStatements().call();

    console.log("Response from getting get Staement")
    console.log(statementContractAddress);

    console.log("Loading the statement instance");
    //load an already deployed contract
    statementContract = await new web3.eth.Contract(
        compiledStatement.abi,
        statementContractAddress[0]
    );
});



describe('Statements', () => {
    it('deploys factory and  a statement', () => {
        assert.ok(statementContract.options.address);
        assert.ok(statementFactory.options.address)
    });    
})


