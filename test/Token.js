const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const ideToken = await ethers.getContractFactory("IDEToken");

    const Token = await ideToken.deploy();

    const ownerBalance = await Token.balanceOf(owner.address);
    expect(await Token.totalSupply()).to.equal(ownerBalance);
  });
});