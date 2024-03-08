const Web3 = require("web3");
const web3 = new Web3(web3Provider);

async function run() {
  try {

    const accounts = await web3.eth.getAccounts();

    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', 'browser/tutorial/artifacts/Storage.json'));
    let contract = new web3.eth.Contract(metadata.abi);

    contract = contract.deploy({
       data: metadata.data.bytecode.object
    });

    let contractDeployed = await contract.send({
      from: accounts[0],
      gas: 1500000,
      gasPrice: '30000000000'
    })
    console.log(`Contract Deployed at ${contractDeployed.options.address}`);
    await remix.call('fileManager', 'writeFile', 'browser/tutorial/artifacts/Storage.addr', contractDeployed.options.address);

  } catch (error) {
    console.log(`Error: ${error}`);
  }

}


console.log("\n############### NEW EXECUTION #################\n");
run();
