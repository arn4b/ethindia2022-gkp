import { ethers } from "ethers";
import abi from "./abi.json";
import store from "../redux/store";

async function setDirectToContract({ name, symbol, limit, price, duration }) {
  let contractAddress = "0xCAb5B4e33Db07F345b8C10931Dd45ed519A61D3C";
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  try {
    const data = await contract.createRentedGate(limit, name, symbol);
  } catch (err) {
    console.log(err);
  }

  return data;
}

export default setDirectToContract;
