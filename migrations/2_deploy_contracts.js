var testContract = artifacts.require("./testContract.sol");
var Token = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  deployer.deploy(testContract);
  deployer.deploy(Token,"Name","TST",18)
};
