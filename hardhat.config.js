require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

let accounts = [];

if (process.env.PRIVATE_KEY) {
  accounts = [`${process.env.PRIVATE_KEY}`, ...accounts];
}

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  networks: {
    ethereum: {
      url: process.env.MAINNET_RPC || "https://mainnet.infura.io/v3/",
      accounts,
    },
    goerli: {
      url: process.env.GOERLI_RPC || "https://goerli.infura.io/v3/",
      accounts,
    },
    polygon: {
      url: process.env.POLYGON_RPC || "https://polygon-rpc.com",
      accounts,
    },
    mumbai: {
      url: process.env.MUMBAI_RPC || "https://rpc-mumbai.maticvigil.com",
      accounts,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
