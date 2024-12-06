// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KukuCoin is ERC20, Ownable {
    uint public constant TOTAL_SUPPLY = 1000000 * 10 ** decimals();
    constructor(uint256 initialSupply) ERC20("KukuCoin", "KUKU") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}