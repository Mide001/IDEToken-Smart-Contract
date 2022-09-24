const { ethers } = require("hardhat");

async function main() {
  const deployer = await ethers.getSigner();
  console.log("Deploying contracts with the accoount", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  const balance = await ethers.utils.formatEther(weiAmount)
  console.log("Account Balance: ", balance);

  const ideToken = await ethers.getContractFactory("IDEToken");
  const Token = await ideToken.deploy();

  console.log("ideToken address: ", Token.address);

}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
  
});