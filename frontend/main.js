
// Connect to the local Hardhat blockchain

const web3 = new Web3('http://127.0.0.1:8545');

// Replace this ABI with the ABI from the compiled contract (artifacts)
/*
const abi = [

{

"inputs": [

{

"internalType": "uint256",

"name": "_initialSupply",

"type": "uint256"

}

],

"stateMutability": "nonpayable",

"type": "constructor"

},

{

"anonymous": false,

"inputs": [

{

"indexed": true,

"internalType": "address",

"name": "from",

"type": "address"

},

{

"indexed": true,

"internalType": "address",

"name": "to",

"type": "address"

},

{

"indexed": false,

"internalType": "uint256",

"name": "value",

"type": "uint256"

}

],

"name": "Transfer",

"type": "event"

},

{

"inputs": [],

"name": "name",

"outputs": [

{

"internalType": "string",

"name": "",

"type": "string"

}

],

"stateMutability": "view",

"type": "function"

},

{

"inputs": [],

"name": "symbol",

"outputs": [

{

"internalType": "string",

"name": "",

"type": "string"

}

],

"stateMutability": "view",

"type": "function"

},

{

"inputs": [],

"name": "totalSupply",

"outputs": [

{

"internalType": "uint256",

"name": "",

"type": "uint256"

}

],

"stateMutability": "view",

"type": "function"

},

{

"inputs": [

{

"internalType": "address",

"name": "_to",

"type": "address"

},

{

"internalType": "uint256",

"name": "_value",

"type": "uint256"

}

],

"name": "transfer",

"outputs": [

{

"internalType": "bool",

"name": "",

"type": "bool"

}

],

"stateMutability": "nonpayable",

"type": "function"

},

{

"inputs": [

{

"internalType": "address",

"name": "",

"type": "address"

}

],

"name": "balanceOf",

"outputs": [

{

"internalType": "uint256",

"name": "",

"type": "uint256"

}

],

"stateMutability": "view",

"type": "function"

}

];
*/

const abi = [
  {
    "_format": "hh-sol-artifact-1",
    "contractName": "MyToken",
    "sourceName": "contracts/Token.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_initialSupply",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040526040518060400160405280600781526020017f4d79546f6b656e00000000000000000000000000000000000000000000000000815250600090816200004a9190620003dc565b506040518060400160405280600381526020017f4d544b000000000000000000000000000000000000000000000000000000000081525060019081620000919190620003dc565b506012600260006101000a81548160ff021916908360ff160217905550348015620000bb57600080fd5b5060405162000f6d38038062000f6d8339818101604052810190620000e19190620004f9565b600260009054906101000a900460ff1660ff16600a620001029190620006ae565b816200010f9190620006ff565b600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550506200074a565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001e457607f821691505b602082108103620001fa57620001f96200019c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002647fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000225565b62000270868362000225565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002bd620002b7620002b18462000288565b62000292565b62000288565b9050919050565b6000819050919050565b620002d9836200029c565b620002f1620002e882620002c4565b84845462000232565b825550505050565b600090565b62000308620002f9565b62000315818484620002ce565b505050565b5b818110156200033d5762000331600082620002fe565b6001810190506200031b565b5050565b601f8211156200038c57620003568162000200565b620003618462000215565b8101602085101562000371578190505b62000389620003808562000215565b8301826200031a565b50505b505050565b600082821c905092915050565b6000620003b16000198460080262000391565b1980831691505092915050565b6000620003cc83836200039e565b9150826002028217905092915050565b620003e78262000162565b67ffffffffffffffff8111156200040357620004026200016d565b5b6200040f8254620001cb565b6200041c82828562000341565b600060209050601f8311600181146200045457600084156200043f578287015190505b6200044b8582620003be565b865550620004bb565b601f198416620004648662000200565b60005b828110156200048e5784890151825560018201915060208501945060208101905062000467565b86831015620004ae5784890151620004aa601f8916826200039e565b8355505b6001600288020188555050505b505050505050565b600080fd5b620004d38162000288565b8114620004df57600080fd5b50565b600081519050620004f381620004c8565b92915050565b600060208284031215620005125762000511620004c3565b5b60006200052284828501620004e2565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620005b9578086048111156200059157620005906200052b565b5b6001851615620005a15780820291505b8081029050620005b1856200055a565b945062000571565b94509492505050565b600082620005d45760019050620006a7565b81620005e45760009050620006a7565b8160018114620005fd576002811462000608576200063e565b6001915050620006a7565b60ff8411156200061d576200061c6200052b565b5b8360020a9150848211156200063757620006366200052b565b5b50620006a7565b5060208310610133831016604e8410600b8410161715620006785782820a9050838111156200067257620006716200052b565b5b620006a7565b62000687848484600162000567565b92509050818404811115620006a157620006a06200052b565b5b81810290505b9392505050565b6000620006bb8262000288565b9150620006c88362000288565b9250620006f77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005c2565b905092915050565b60006200070c8262000288565b9150620007198362000288565b9250828202620007298162000288565b915082820484148315176200074357620007426200052b565b5b5092915050565b610813806200075a6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd14610085578063313ce567146100a357806370a08231146100c157806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61013f565b60405161007c91906104bb565b60405180910390f35b61008d6101cd565b60405161009a91906104f6565b60405180910390f35b6100ab6101d3565b6040516100b8919061052d565b60405180910390f35b6100db60048036038101906100d691906105ab565b6101e6565b6040516100e891906104f6565b60405180910390f35b6100f96101fe565b60405161010691906104bb565b60405180910390f35b61012960048036038101906101249190610604565b61028c565b604051610136919061065f565b60405180910390f35b6000805461014c906106a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610178906106a9565b80156101c55780601f1061019a576101008083540402835291602001916101c5565b820191906000526020600020905b8154815290600101906020018083116101a857829003601f168201915b505050505081565b60035481565b600260009054906101000a900460ff1681565b60046020528060005260406000206000915090505481565b6001805461020b906106a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610237906106a9565b80156102845780601f1061025957610100808354040283529160200191610284565b820191906000526020600020905b81548152906001019060200180831161026757829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030790610726565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461035f9190610775565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103b591906107a9565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161041991906104f6565b60405180910390a36001905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561046557808201518184015260208101905061044a565b60008484015250505050565b6000601f19601f8301169050919050565b600061048d8261042b565b6104978185610436565b93506104a7818560208601610447565b6104b081610471565b840191505092915050565b600060208201905081810360008301526104d58184610482565b905092915050565b6000819050919050565b6104f0816104dd565b82525050565b600060208201905061050b60008301846104e7565b92915050565b600060ff82169050919050565b61052781610511565b82525050565b6000602082019050610542600083018461051e565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105788261054d565b9050919050565b6105888161056d565b811461059357600080fd5b50565b6000813590506105a58161057f565b92915050565b6000602082840312156105c1576105c0610548565b5b60006105cf84828501610596565b91505092915050565b6105e1816104dd565b81146105ec57600080fd5b50565b6000813590506105fe816105d8565b92915050565b6000806040838503121561061b5761061a610548565b5b600061062985828601610596565b925050602061063a858286016105ef565b9150509250929050565b60008115159050919050565b61065981610644565b82525050565b60006020820190506106746000830184610650565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806106c157607f821691505b6020821081036106d4576106d361067a565b5b50919050565b7f496e73756666696369656e742062616c616e636520696e207468697320616363600082015250565b6000610710602083610436565b915061071b826106da565b602082019050919050565b6000602082019050818103600083015261073f81610703565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610780826104dd565b915061078b836104dd565b92508282039050818111156107a3576107a2610746565b5b92915050565b60006107b4826104dd565b91506107bf836104dd565b92508282019050808211156107d7576107d6610746565b5b9291505056fea26469706673582212202b85909264ee3b4f63bb26d073c809243a628bb616d73e636c8b6264378a051864736f6c63430008180033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd14610085578063313ce567146100a357806370a08231146100c157806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61013f565b60405161007c91906104bb565b60405180910390f35b61008d6101cd565b60405161009a91906104f6565b60405180910390f35b6100ab6101d3565b6040516100b8919061052d565b60405180910390f35b6100db60048036038101906100d691906105ab565b6101e6565b6040516100e891906104f6565b60405180910390f35b6100f96101fe565b60405161010691906104bb565b60405180910390f35b61012960048036038101906101249190610604565b61028c565b604051610136919061065f565b60405180910390f35b6000805461014c906106a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610178906106a9565b80156101c55780601f1061019a576101008083540402835291602001916101c5565b820191906000526020600020905b8154815290600101906020018083116101a857829003601f168201915b505050505081565b60035481565b600260009054906101000a900460ff1681565b60046020528060005260406000206000915090505481565b6001805461020b906106a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610237906106a9565b80156102845780601f1061025957610100808354040283529160200191610284565b820191906000526020600020905b81548152906001019060200180831161026757829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610310576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030790610726565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461035f9190610775565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103b591906107a9565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161041991906104f6565b60405180910390a36001905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561046557808201518184015260208101905061044a565b60008484015250505050565b6000601f19601f8301169050919050565b600061048d8261042b565b6104978185610436565b93506104a7818560208601610447565b6104b081610471565b840191505092915050565b600060208201905081810360008301526104d58184610482565b905092915050565b6000819050919050565b6104f0816104dd565b82525050565b600060208201905061050b60008301846104e7565b92915050565b600060ff82169050919050565b61052781610511565b82525050565b6000602082019050610542600083018461051e565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105788261054d565b9050919050565b6105888161056d565b811461059357600080fd5b50565b6000813590506105a58161057f565b92915050565b6000602082840312156105c1576105c0610548565b5b60006105cf84828501610596565b91505092915050565b6105e1816104dd565b81146105ec57600080fd5b50565b6000813590506105fe816105d8565b92915050565b6000806040838503121561061b5761061a610548565b5b600061062985828601610596565b925050602061063a858286016105ef565b9150509250929050565b60008115159050919050565b61065981610644565b82525050565b60006020820190506106746000830184610650565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806106c157607f821691505b6020821081036106d4576106d361067a565b5b50919050565b7f496e73756666696369656e742062616c616e636520696e207468697320616363600082015250565b6000610710602083610436565b915061071b826106da565b602082019050919050565b6000602082019050818103600083015261073f81610703565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610780826104dd565b915061078b836104dd565b92508282039050818111156107a3576107a2610746565b5b92915050565b60006107b4826104dd565b91506107bf836104dd565b92508282019050808211156107d7576107d6610746565b5b9291505056fea26469706673582212202b85909264ee3b4f63bb26d073c809243a628bb616d73e636c8b6264378a051864736f6c63430008180033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  
];

// Replace with your deployed contract address

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const tokenContract = new web3.eth.Contract(abi, contractAddress);

// Check balance

async function getBalance() {

const address = document.getElementById("address").value;

const balance = await

tokenContract.methods.balanceOf(address).call();

document.getElementById("balance").innerText = `Balance: ${balance}`;

}

// Transfer tokens

async function transferTokens() {

const recipient = document.getElementById("recipient").value;

const amount = document.getElementById("amount").value;

const accounts = await web3.eth.getAccounts();
console.log("Accounts:", accounts);
console.log("Token Contract:", tokenContract);
//Fixed the break
await tokenContract.methods.transfer(recipient,amount).send({ from: accounts[0] });

document.getElementById("transactionResult").innerText = "Transfer Successful!";

}
//python3 -m http.server


 