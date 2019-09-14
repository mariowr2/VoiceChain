import web3 from './web3';
import compiledStatementFactory from './build/StatementFactory';
    const factoryInstance = new web3.eth.Contract(
        compiledStatementFactory.abi,
        '0x9628B80CfC747725Fa0f6a9b21D1931dDFbbe4c8'
    );
    


export default factoryInstance;