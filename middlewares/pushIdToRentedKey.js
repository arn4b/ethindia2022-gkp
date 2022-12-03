import { ethers } from 'ethers'
import abi from './abi.json'
import store from '../redux/store'
import { GKP_CONTRACT_ADDRESS } from '../public/constants'

async function pushIdToRentedKey(globalId) {
    let contractAddress = GKP_CONTRACT_ADDRESS
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()

    const contract = new ethers.Contract(contractAddress, abi, signer)

    const data = await contract.idToRentedKey(globalId)

    return data;
}

export default pushIdToRentedKey