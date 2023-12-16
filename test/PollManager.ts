import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

enum EventResult {
  Success,
}

function stringToBytes32Compatible(inputString: string | undefined) {
  const utf8Encoder = new TextEncoder();
  const data = utf8Encoder.encode(inputString);
  const bytes32Array = new Uint8Array(32);
  bytes32Array.set(data);
  return bytes32Array;
}

describe("Voting", function () {
  async function deploy() {
    const Voting = await ethers.getContractFactory("PollManager");
    const voting = await Voting.deploy();
    return { voting };
  }

  describe("Create Poll", function () {
    it("Should create a poll", async function () {
      const { voting } = await loadFixture(deploy);
      const pollName = "Who?";
      const proposalNames = ["Akhmetov", "Nazarbaev"];

      await expect(voting.createPoll(stringToBytes32Compatible(pollName), proposalNames.map(stringToBytes32Compatible)))
        .to.emit(voting, "PollCreated")
        .withArgs(EventResult.Success);
    });
  });

  describe("Vote", function () {
    it("Should vote", async function () {
      const { voting } = await loadFixture(deploy);
      const pollName = "Who?";
      const proposalName = "Akhmetov";

      await expect(voting.vote(stringToBytes32Compatible(pollName), stringToBytes32Compatible(proposalName)))
        .to.emit(voting, "Voted")
        .withArgs(EventResult.Success);
    });
  });
});
