import * as solc from "solc";
import * as fs from "fs";

// 계약 소스 코드 읽기
const source = fs.readFileSync("contracts/KukuCoin.sol", "utf8");

const input = {
  language: "Solidity",
  sources: {
    "KukuCoin.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const abi = output.contracts["KukuCoin.sol"]["KukuCoin"].abi;
console.log(JSON.stringify(abi, null, 2));
