var testContract = artifacts.require("./testContract.sol");

module.exports = function(deployer) {
  deployer.deploy(testContract);
};
