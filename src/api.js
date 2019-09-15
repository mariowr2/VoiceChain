import web3 from './eth/web3';
import factory from './eth/factory';
import { getStatement } from './eth/statement';



//=======================
//Statement api endpoints
//=======================


//returns the statement instance
export async function getStatementInstance(address){
    return await getStatement(address);
}

//get the statement from the statement hehe
export async function getStatementFromInstance(address){
    //let instance = getStatement(address);
    return await getStatement(address).methods.getStatement().call();
}

//get the author of the statement
export async function getStatementAuthor(address){
    //let instance = getStatement(address);
    return await getStatement(address).methods.getAuthor().call();
}



//=======================
// Factory api endpoints
//=======================

//returns the factory instance
export function getStatementFactory(){
    return factory;
}

//returns array of all deployed stsatements addresses
export async function getStatementInstancesAddresses(){
    return await factory.methods.getStatements().call();
}

//returns the address of who deployed the factory
export async function getFactoryOwner(){
    return await factory.methods.getFactoryOwner().call();
}

//returns the address of a deployed statement
export async function getStatementAddressByIndex(index){
    return await factory.methods.getStatementAddressByIndex(index).call();
}

//statement creation function
export async function createStatement(statement, author){
    const accounts = await web3.eth.getAccounts();
    await window.ethereum.enable(); //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    await factory.methods.createStatement(statement, author).send({from : accounts[0], gas: 1000000});

}

export async function getLatestStatementAddress(){
    let latestIndex;
    await factory.methods.getCurrentIndex().call().then(
        function(returnVal) {
          latestIndex = returnVal;
          console.log("latest index is ",latestIndex);
        }
    );

    let latestAddress;
    await factory.methods.getStatementAddressByIndex(latestIndex).call().then(
        function(returnVal) {
            latestAddress = returnVal;
        }
    );

    return latestAddress;
}

