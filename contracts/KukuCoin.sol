// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KukuCoin is ERC20, Ownable {
    // 총 공급량 = 1억 개
    uint256 public constant TOTAL_SUPPLY = 100_000_000 * 10 ** 18;

    // 분배 비율
    uint256 public constant TEAM_SUPPLY = TOTAL_SUPPLY * 30 / 100; 
    uint256 public constant COMMUNITY_SUPPLY = TOTAL_SUPPLY * 25 / 100; 
    uint256 public constant LIQUIDITY_SUPPLY = TOTAL_SUPPLY * 30 / 100; 
    uint256 public constant RESERVE_SUPPLY = TOTAL_SUPPLY * 15 / 100;

    // airdrop 가능한 최소 보유량
    uint256 public constant MINIMUM_BALANCE = 50 * 10 ** 18; 

    // 보유자 목록
    address[] public holders;

    
    constructor() ERC20("KukuCoin", "KUKU") Ownable(msg.sender) {
        _mint(msg.sender, TEAM_SUPPLY);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // 에어드랍 기능 추가
    function airdrop(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than 0");

        for (uint256 i = 0; i < holders.length; i++) {
            address holder = holders[i];
            // 보유자가 고정된 최소 잔액을 충족하는지 확인
            if (balanceOf(holder) >= MINIMUM_BALANCE) {
                _mint(holder, amount); // 조건을 충족하는 경우, 에어드랍
            }
        }
    }

    // holders에 주소 추가
    function addHolder(address holder) external {
        require(holder != address(0), "Invalid address");
        holders.push(holder);
    }

    // holders 가져오는 함수
    function getHolders() external view returns (address[] memory) {
        return holders;
    }
}


