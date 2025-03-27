import Web3 from "web3";
import MROLogbook from "./contracts/MROLogbook.json";

const getWeb3 = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    return web3;
  } else {
    console.log("Please install MetaMask!");
    return null;
  }
};

const getContract = async (web3) => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = MROLogbook.networks[networkId];
  return new web3.eth.Contract(MROLogbook.abi, deployedNetwork && deployedNetwork.address);
};

export { getWeb3, getContract };
