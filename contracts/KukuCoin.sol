// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KukuCoin is ERC20, Ownable {
    uint256 public immutable TOTAL_SUPPLY;
    
    uint256 public immutable TEAM_SUPPLY;
    uint256 public immutable COMMUNITY_SUPPLY;
    uint256 public immutable LIQUIDITY_SUPPLY;
    uint256 public immutable RESERVE_SUPPLY;

    address[] public holders;

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
    // airdrop 함수
    function airdrop(uint256 minimumBalance, uint256 amount) external onlyOwner{
        require(amount > 0, "Amount must be greater than 0");

        for (uint256 i=0; i < holders.length;i++){
            address holder = holders[i];
            if (balanceOf(holder) >= minimumBalance){
                _mint(holder, amount);
            }
        }
    }
    // holders 에 주소 추가
    function addHolder(address holder) external {
        require(holder != address(0), "Invalid address");
        holders.push(holder);
    }

    // holders 조회
    function getHolders() external view returns (address[] memory) {
        return holders;
    }
}