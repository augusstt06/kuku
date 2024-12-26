# KukuCoin

KukuCoin is an ERC20 token based on the Ethereum blockchain, designed for community and team asset distribution. This project allows for secure and transparent token issuance and management through smart contracts.

> 📌 The link below is Kuku Coin’s web frontend repository.
>
> [Kuku Coin Web Frontend](https://github.com/augusstt06/kuku-frontend)

## Deploy Address

KukuCoin smart contract is deployed at the following address:

- **Address**: `0x2A2324644334e39E2a3AE8d8EE09567A9ec733A1`

> 📌 You can easily check it on the following link
>
> [Etherscan - KukuCoin](https://sepolia.etherscan.io/address/0x2A2324644334e39E2a3AE8d8EE09567A9ec733A1)

## Main Features

- **ERC20 Compliance**: KukuCoin adheres to the ERC20 standard, making it compatible with various DApps.
- **Token Minting**: The owner can mint KukuCoin to specific addresses.
- **Airdrop Function**: The owner can airdrop KukuCoin to addresses in the holder list if they meet certain conditions.
- **Holder Management**: The owner can add new holders and view the holder list.
- **Token Transfer**: The owner can transfer KukuCoin to specific addresses.

## Supply

- **Total Supply**: 100,000,000 KUKU
- **Team Supply**: 30%
- **Community Supply**: 25%
- **Liquidity Supply**: 30%
- **Reserve Supply**: 15%

## Minimum Balance

To receive an airdrop, you must hold at least 50 KukuCoin.

## Installation and Usage

1. **Environment Setup**: Node.js and Hardhat are required to run this project.
2. **Dependency Installation**:
   ```bash
   yarn install
   ```
3. **Deploy Smart Contract**:
   ```bash
   npx hardhat run scripts/deploy.ts --network sepolia
   ```

## Test

You can use Hardhat test environment to test the KukuCoin's features. To run the tests, use the following command:

```bash
npx hardhat test
```
