// remix에서 동작하지 않음 (fs, solc)
// remix의 자동컴파일 결과파일 구조도 다름

const solc = = require("solc");
const fs = require("fs");

async function run(ContractName) {
    const contractFile = contractName + '.sol';
    const compiledFile = contractName + '.json';

    // read from file
    const sourceCode = fs.readFileSync(contractFile, 'utf8');
    
    const input = {
        "language": "Solidity",
        "sources": { "main": { "content": sourceCode } },
//        "settings": { "outputSelection": { "*": { "*": ["abi", "evm.bytecode"]}}},
        "settings": { "outputSelection": { "*": { "*": ["*"]}}},
    };
    
    const output = solc.compile(JSON.stringify(input));
    
    const artifact = JSON.parse(output).contracts.main[contractName];

    // write to file
    fs.writeFileSync(compiledFile, JSON.stringify(artifact));

    // return
    return {
        abi: artifact.abi,
        bytecode: artifact.evm.bytecode.object,
    };    

}


console.log("\n############### NEW EXECUTION #################\n");
const { abi, bytecode } = run('Storage');
