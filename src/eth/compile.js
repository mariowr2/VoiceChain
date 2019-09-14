const compile = () => {
    const path = require('path'); //guaranteed to get cross platform compatibility
    const solc = require('solc');
    const fs = require('fs-extra');

    const buildPath = path.resolve(__dirname, 'build');
    fs.removeSync(buildPath);

    const statementFactoryPath = path.resolve(__dirname, 'contracts', 'Statements.sol');
    console.log("path resolved");
    const source = fs.readFileSync(statementFactoryPath, 'utf8');
    console.log("file read");

    let jsonContractSource = JSON.stringify({
        language: 'Solidity',
        sources: {
            'Statements.sol': {
                content: source,
            },
        },
        settings: { 
            outputSelection: {
                '*': {
                    '*': ['abi',"evm.bytecode"], 
                },
            },
        },
    });

    compilationOutput = solc.compile(jsonContractSource);
    statementFactoryContractOutput = JSON.parse(compilationOutput)["contracts"]["Statements.sol"]["StatementFactory"];
    statementContractOutput = JSON.parse(compilationOutput)["contracts"]["Statements.sol"]["Statement"];

    fs.ensureDirSync(buildPath);


    fs.outputJSONSync(
        path.resolve(buildPath, "Statement.json"),
        statementContractOutput
    );

    fs.outputJSONSync(
            path.resolve(buildPath, "StatementFactory.json"),
            statementFactoryContractOutput
    );

    console.log("Compiled");
}

//export default compile;
compile();