const Web3 = require ("web3");
const web3 = new Web3(web3Provider);

async function run() {

 
    const accounts = web3.eth.getAccounts()
    .then( accounts => {
        accounts.forEach( (account) => {
            const balance = web3.eth.getBalance(account)
            .then( balance => console.log(`${balance} at ${account}`));
        })
    });


};


console.log("\n############### NEW EXECUTION #################\n");
run();

