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
    
    function getFactoryOwner() public view returns(address){
        return factoryOwner;
    }
    
    function getStatementAddressByIndex(uint _index) public view lessThanCurrentIndex(_index) returns(Statement){
        return statementAddresses[_index];
    }
    
    modifier lessThanCurrentIndex(uint _number){
        require(_number <= currentIndex, 'Attempted to go out of bounds');
        _;
    }
}

contract Statement {
    
    string public statement;
    string public author;
    
    struct conversationStatement{
        address fromAddress;
    }
    
    constructor(string memory _statement, string memory _author) public {
        statement = _statement;
        author = _author;
        
    }
    
    function getStatement() public view returns(string memory){
        return statement;
    }
    
    function getAuthor() public view returns(string memory){
        return author;
    }
    
    
}
    

    