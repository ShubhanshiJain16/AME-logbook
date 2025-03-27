// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract MROLogbook {
    uint256 public someValue;
    address public owner;

    event LogbookDeployed(uint256 indexed _someValue, address indexed _owner);

    constructor(uint256 _someValue) {
        require(_someValue > 0, "Invalid initial value");

        someValue = _someValue;
        owner = msg.sender;

        emit LogbookDeployed(_someValue, msg.sender);
    }
}
