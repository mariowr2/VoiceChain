import web3 from './web3';
import compiledStatementContract from './build/Statement';

export function getStatement(address) {
    const statementInstance = new web3.eth.Contract(
        compiledStatementContract.abi,
        address
    );
    return statementInstance;
}