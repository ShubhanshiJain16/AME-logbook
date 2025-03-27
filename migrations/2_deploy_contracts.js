const MROLogbook = artifacts.require("MROLogbook");

module.exports = function (deployer) {
  const initialValue = 100; // Any non-zero initial value
  deployer.deploy(MROLogbook, initialValue);
};
