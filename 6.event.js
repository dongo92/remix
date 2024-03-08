const Web3 = require("web3");
const web3 = new Web3(web3Provider);

async function run() {
  try {
    const target = await remix.call('fileManager', 'getFile', 'browser/tutorial/artifacts/Storage.addr');
    const accounts = await web3.eth.getAccounts();

    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', 'browser/tutorial/artifacts/Storage.json'));
    let contract = new web3.eth.Contract(metadata.abi, target);


    // subscription event
    // contract.once('Store', (error, result) => console.log(`Once Event ${error}`));

    // contract.events.Store((error, result) => console.log(`Event ${error}`))

    // contract.events.Store((error, result) => console.log(`Event ${result}`))
    // .on('data', event => console.log(`Data: $[event}`))
    // .on('changed', event => console.log(`Changed: ${event}`))
    // .on('connected', event => console.log(`Connected: ${event}`))
    // .on('error', (error, receipt) => console.log(`Error: ${error}, Receipt: ${receipt}`));
    
    console.log("Send Tx");
    await contract.methods.store(10).send({from: accounts[0]}, (error, result) => console.log(`Transaction Hash: ${result}`));


    // await contract.methods.retrieve().call({from: accounts[0]})
    // .then( result => console.log(`After Value: ${result}`));

    contract.getPastEvents('Store', {
        // filter: { sender: '0x123abc' }, // Optional event filtering
        fromBlock: 0, // Start block number
        toBlock: 'latest' // End block number
        })
    .then(function(events) {
        // Process the retrieved events
        console.log(events);
    })
    .catch(function(error) {
        // Handle errors
        console.error(error);
    });




  } catch (error) {
    console.log(`Error: ${error}`);
  }

}


console.log("\n############### NEW EXECUTION #################\n");
run();
