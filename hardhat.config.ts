import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.API_KEY}`,
      accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`],
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    //   accounts: [`0x${process.env.ROPSTEN_PRIVATE_KEY}`],
    // },
    // mainnet: {
    //   url: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    //   accounts: [`0x${process.env.MAINNET_PRIVATE_KEY}`],
    // },
  },
};

export default config;
