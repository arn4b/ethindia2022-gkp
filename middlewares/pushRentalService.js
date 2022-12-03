import { ethers } from "ethers";
import abi from "./abi.json";
import store from "../redux/store";
import { GKP_CONTRACT_ADDRESS } from "../public/constants";

async function pushRentalService({ name, symbol, limit, price, duration }) {
  let contractAddress = GKP_CONTRACT_ADDRESS;
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  let data = {};
  data = await contract.createRentedGate(limit, name, symbol);

  return data;
}

export default pushRentalService;
