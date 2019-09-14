import web3 from './web3';
import compiledStatementFactory from './build/StatementFactory';
    const factoryInstance = new web3.eth.Contract(
        compiledStatementFactory.abi,
        '0x47cf5251941B3C6609BF59254F583A13a15EFf6d'
    );
    


export default factoryInstance;