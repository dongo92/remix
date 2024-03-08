const Web3 = require("web3");
const web3 = new Web3(web3Provider);

async function run() {
  try {
    const target = await remix.call('fileManager', 'getFile', 'browser/tutorial/artifacts/Storage.addr');
    const accounts = await web3.eth.getAccounts();

    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', 'browser/tutorial/artifacts/Storage.json'));
    let contract = new web3.eth.Contract(metadata.abi, target);

    await contract.methods.retrieve().call({from: accounts[0]}, (error, result) => console.log(`Before Value: ${result}`));
 
    await contract.methods.store(10).send({from: accounts[0]}, (error, result) => console.log(`Transaction Hash: ${result}`));

    await contract.methods.retrieve().call({from: accounts[0]})
    .then( result => console.log(`After Value: ${result}`));

  } catch (error) {
    console.log(`Error: ${error}`);
  }

}


console.log("\n############### NEW EXECUTION #################\n");
run();
