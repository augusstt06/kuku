import { expect } from "chai";
import { ethers } from "hardhat";

describe("KukuCoin", function () {
  it("Should deploy KukuCoin contract and mint intial supply", async function () {
    const [owner] = await ethers.getSigners();
    const KukuCoin = await ethers.getContractFactory("KukuCoin");
    const kukuCoin = await KukuCoin.deploy(ethers.parseEther("1000000"));

    expect(await kukuCoin.balanceOf(owner.address)).to.equal(
      ethers.parseEther("1000000")
    );
  });
});
