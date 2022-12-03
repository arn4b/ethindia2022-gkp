import { ethers } from 'ethers'
import { GKP_CONTRACT_ADDRESS } from '../public/constants'
import abi from './abi.json'

async function getGlobalIds() {
    let contractAddress = GKP_CONTRACT_ADDRESS
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    console.log('Account:', await signer.getAddress())

    const contract = new ethers.Contract(contractAddress, abi, signer)

    const data = await contract.globalId();
    const simplifiedData = ethers.BigNumber.from(data).toString()
    console.log(simplifiedData);

    return data;
}

export default getGlobalIds