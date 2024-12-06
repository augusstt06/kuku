import { ethers } from "hardhat";
import { expect } from "chai";

describe("KukuCoin", function () {
  let KukuCoin: any;
  let kukuCoin: any;
  let owner: any;
  let address1: any;
  let address2: any;

  beforeEach(async function () {
    KukuCoin = await ethers.getContractFactory("KukuCoin");
    [owner, address1, address2] = await ethers.getSigners();
    kukuCoin = await KukuCoin.deploy();
    await kukuCoin.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right total supply", async function () {
      const totalSupply = await kukuCoin.TOTAL_SUPPLY;
      expect(totalSupply).to.equal(ethers.utils.parseUnits("100000000", 18));
    });
    it("Should assign the initial supply to the owner", async function () {
      const ownerBalance = await kukuCoin.balanceOf(owner.address);
      expect(ownerBalance).to.equal(ethers.utils.parseUnits("30000000", 18));
    });
  });

  describe("Airdrop", function () {
    beforeEach(async function () {
      await kukuCoin.addHolder(address1.address);
      await kukuCoin.addHolder(address2.address);

      await kukuCoin.mint(address1.address, ethers.utils.parseUnits("100", 18));
    });
    it("Should allow airdrop to holders with sufficient balance", async function () {
      await kukuCoin.airdrop(ethers.utils.parseUnits("10", 18));

      const address1Balance = await kukuCoin.balanceOf(address1.address);
      const address2Balance = await kukuCoin.balanceOf(address2.address);

      expect(address1Balance).to.equal(ethers.utils.parseUnits("110", 18));
      expect(address2Balance).to.equal(ethers.utils.parseUnits("0", 18));
    });
    it("Should not airdrop to holders below minimum balance", async function () {
      await kukuCoin.airdrop(ethers.utils.parseUnits("10", 18));
      const address2Balance = await kukuCoin.balanceOf(address2.address);

      expect(address2Balance).to.equal(ethers.utils.parseUnits("0", 18));
    });
  });
});
