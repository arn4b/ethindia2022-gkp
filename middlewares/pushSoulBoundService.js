import { ethers } from "ethers";
import abi from "./abi.json";
import store from "../redux/store";

async function pushSoulBoundGate({ name, symbol, limit, price }) {
  let contractAddress = "0xCAb5B4e33Db07F345b8C10931Dd45ed519A61D3C";
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  let data = {};
  data = await contract.createSoulBoundGate(limit, name, symbol);

  return data;
}

export default pushSoulBoundGate;
