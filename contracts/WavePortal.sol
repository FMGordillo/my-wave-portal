//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves;

  constructor() {
    console.log("Done");
  }

  function wave() public {
    totalWaves ++;
    console.log("%s has waved", msg.sender);
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("we have", totalWaves, "waves");
    return totalWaves;
  }
}