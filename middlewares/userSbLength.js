import { ethers } from "ethers";
import { GKP_CONTRACT_ADDRESS } from "../public/constants";
import abi from "./abi.json";

async function userSbLength(address) {
  let contractAddress = GKP_CONTRACT_ADDRESS;
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const data = await contract.userSbkDropLength(address);
  const simplifiedData = ethers.BigNumber.from(data).toString();
  console.log(simplifiedData);

  return simplifiedData;
}

export default userSbLength;
