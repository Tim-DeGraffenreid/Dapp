const hre = require("hardhat");

async function main() {
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const initialSupply = 1000000;
    const token = await MyToken.deploy(initialSupply);

    console.log("Token deployed to:", token.target); // ethers v6.x uses 'target'
}
//Token deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });