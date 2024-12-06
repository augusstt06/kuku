import { expect } from "chai";
import { ethers } from "hardhat";
import { KukuCoin } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("KukuCoin", function () {
  let kukuCoin: KukuCoin;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const KukuCoin = await ethers.getContractFactory("KukuCoin");
    kukuCoin = await KukuCoin.deploy();
    await kukuCoin.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right total supply", async function () {
      const teamSupply = await kukuCoin.TEAM_SUPPLY();
      expect(await kukuCoin.totalSupply()).to.equal(teamSupply);
    });

    it("Should assign the initial supply to the owner", async function () {
      const teamSupply = await kukuCoin.TEAM_SUPPLY();
      expect(await kukuCoin.balanceOf(owner.address)).to.equal(teamSupply);
    });
  });

  describe("Airdrop", function () {
    beforeEach(async function () {
      await kukuCoin.addHolder(addr1.address);
      await kukuCoin.addHolder(addr2.address);

      await kukuCoin.mint(addr1.address, ethers.utils.parseUnits("100", 18));
    });
    it("Should allow airdrop to holders with sufficient balance", async function () {
      await kukuCoin.airdrop(ethers.utils.parseUnits("10", 18));

      const addr1Balance = await kukuCoin.balanceOf(addr1.address);
      const addr2Balance = await kukuCoin.balanceOf(addr2.address);

      expect(addr1Balance).to.equal(ethers.utils.parseUnits("110", 18));
      expect(addr2Balance).to.equal(ethers.utils.parseUnits("0", 18));
    });
    it("Should not airdrop to holders below minimum balance", async function () {
      await kukuCoin.airdrop(ethers.utils.parseUnits("10", 18));
      const addr2Balance = await kukuCoin.balanceOf(addr2.address);

      expect(addr2Balance).to.equal(ethers.utils.parseUnits("0", 18));
    });
  });
});
