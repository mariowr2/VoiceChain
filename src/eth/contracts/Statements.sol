pragma solidity ^0.5.1;

 
contract StatementFactory {
     
    address public factoryOwner;
    uint currentIndex;
    uint constant statement_limit = 100;
    Statement[] public statementAddresses;
    
     
    constructor() public {
        factoryOwner = msg.sender;
        currentIndex = 0;
        
    }
    
    //deploy a statement contract
    function createStatement(string memory _statement, string memory _author) public {
        statementAddresses.push(new Statement(_statement, _author));
        currentIndex++;
    }

    function getStatements() public view returns(Statement[] memory){
        return statementAddresses;
    }
}



contract Statement {
    
    string public statement;
    string public author;
    
    constructor(string memory _statement, string memory _author) public {
        statement = _statement;
        author = _author;
        
    }
}