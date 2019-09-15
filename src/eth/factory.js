import web3 from './web3';
import compiledStatementFactory from './build/StatementFactory';
    
    const factoryInstance = new web3.eth.Contract(
        compiledStatementFactory.abi,
        '0x2DC4c1aC4e5e9a05B59167F33AC745A360c850C4'
    );
    


export default factoryInstance;