import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const KukuCoin = await ethers.getContractFactory("KukuCoin");
  const kukuCoin = await KukuCoin.deploy();

  console.log("KukuCoin deployed to:", kukuCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
