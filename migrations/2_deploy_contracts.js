var testContract = artifacts.require("./testContract.sol");
var Token20 = artifacts.require("./Token20.sol");
var Token721 = artifacts.require("./Token721.sol");

module.exports = function(deployer) {
  deployer.deploy(testContract);
  deployer.deploy(Token20,"KissConsult","KISS",18);
  deployer.deploy(Token721,"KissConsult","KISS")
};
