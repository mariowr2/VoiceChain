//import web3 from './eth/web3';
import factory from './eth/factory';
import { getStatement } from './eth/statement';


//returns the statement instance
export function getStatementInstance(address){
    return getStatement(address);
}

//returns the factory instance
export function getStatementFactory(address){
    return factory;
}

//returns array of addresses
export async function getStatementInstancesAddresses(){
    return  await factory.methods.getStatements().call();
}


