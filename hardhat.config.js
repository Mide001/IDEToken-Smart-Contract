require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");



const Private_Key = "xxxxxxx"
const Alchemy_API = "xxxx"
module.exports = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: "xxx",
  },
  networks: {
    matic: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${Alchemy_API}`,
      accounts: [Private_Key]
    }
  }
};
