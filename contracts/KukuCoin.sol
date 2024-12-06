// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KukuCoin is ERC20, Ownable {
    // 총 공급량을 1억 개로 설정
    uint256 public immutable TOTAL_SUPPLY;

    // 분배 비율
    uint256 public immutable TEAM_SUPPLY;
    uint256 public immutable COMMUNITY_SUPPLY;
    uint256 public immutable LIQUIDITY_SUPPLY;
    uint256 public immutable RESERVE_SUPPLY;

    constructor() ERC20("KukuCoin", "KUKU") Ownable(msg.sender) {
        TOTAL_SUPPLY = 100_000_000 * 10 ** decimals();

        TEAM_SUPPLY = TOTAL_SUPPLY * 30 / 100;
        COMMUNITY_SUPPLY = TOTAL_SUPPLY * 25 / 100; 
        LIQUIDITY_SUPPLY = TOTAL_SUPPLY * 30 / 100; 
        RESERVE_SUPPLY = TOTAL_SUPPLY * 15 / 100; 

        _mint(msg.sender, TEAM_SUPPLY);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}