import { ethers } from "ethers";
import abi from "./abi.json";
import store from "../redux/store";
import { GKP_CONTRACT_ADDRESS } from "../public/constants";

async function pushSoulBoundGate({ name, symbol, limit, price }) {
  let contractAddress = GKP_CONTRACT_ADDRESS;
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  let data = {};
  data = await contract.createSoulBoundGate(limit, name, symbol);

  await data.wait(10);

  return data;
}

export default pushSoulBoundGate;
