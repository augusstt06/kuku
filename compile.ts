import * as solc from "solc";
import * as fs from "fs";
import * as path from "path";

const source = fs.readFileSync(
  path.resolve(__dirname, "./contracts/KukuCoin.sol"),
  "utf8"
);

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

const importCallback = (importPath: string) => {
  const fullPath = path.resolve(__dirname, "node_modules", importPath);
  if (fs.existsSync(fullPath)) {
    return {
      contents: fs.readFileSync(fullPath, "utf8"),
    };
  }
  throw new Error(`File not found: ${fullPath}`);
};

const output = JSON.parse(
  solc.compile(JSON.stringify(input), { import: importCallback })
);

console.log(output);

const abi = output.contracts["KukuCoin.sol"]["KukuCoin"].abi;
console.log(JSON.stringify(abi, null, 2));
