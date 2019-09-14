import factory from './eth/factory';



const getStatementAddress = async () => {
    address = factory.methods.getStatements().call();
    console.log(address);
}

export default getStatementAddress;