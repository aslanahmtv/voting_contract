// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PollManager is Ownable {
    enum EventResult { Success }

    event PollCreated(EventResult result);
    event Voted(EventResult result);

    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    struct Poll {
        bytes32 name;
        uint proposalCount;
    }

    Poll[] public polls;
    mapping(bytes32 => mapping(bytes32 => Proposal)) public pollProposals;

    constructor() Ownable(msg.sender) {}

    function vote(bytes32 pollName, bytes32 proposalName) public {
        pollProposals[pollName][proposalName].voteCount++;
        emit Voted(EventResult.Success);
    }

    function createPoll(bytes32 name, bytes32[] memory proposalNames) public onlyOwner {
        require(polls.length == 0, "Poll already exists");

        polls.push(Poll(name, proposalNames.length));

        for (uint i = 0; i < proposalNames.length; i++) {
            pollProposals[name][proposalNames[i]] = Proposal(proposalNames[i], 0);
        }

        emit PollCreated(EventResult.Success);
    }
}
