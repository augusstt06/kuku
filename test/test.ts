import { expect } from "chai";
import { ethers } from "hardhat";

describe("KukuCoin", function () {
  it("Should deploy KukuCoin contract and mint intial supply", async function () {
    const KukuCoin = await ethers.getContractFactory("KukuCoin");
    const kukuCoin = await KukuCoin.deploy();

    await kukuCoin.deployed();

    const teamSupply = await kukuCoin.TEAM_SUPPLY();
    expect(await kukuCoin.totalSupply()).to.equal(teamSupply);
  });
});
