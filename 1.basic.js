

const Web3 = require ("web3");
const web3 = new Web3(web3Provider);

async function run() {

    const coinbase = web3.eth.getCoinbase( (error, result) => console.log(`Coinbase: ${result}`));
    const blockNumber = web3.eth.getBlockNumber( (error, result) => console.log(`Block Number: ${result}`));
    const hashrate = web3.eth.getHashrate( (error, result) => console.log(`Hashrate: ${result}`));
    const gasPrice = web3.eth.getGasPrice( (error, result) => console.log(`Gas Price in wei: ${result}`));
    const chainId = web3.eth.getChainId( (error, result) => console.log(`Chain ID: ${result}`));


    web3.eth.getChainId

};

console.log("\n############### NEW EXECUTION #################\n");
run();
