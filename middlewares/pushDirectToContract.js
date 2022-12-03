import { ethers } from 'ethers'
import abi from './abi.json'
import store from '../redux/store'
import { GKP_CONTRACT_ADDRESS } from '../public/constants'

async function pushDirectToContract(userName) {
    let contractAddress = GKP_CONTRACT_ADDRESS
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    console.log('Account:', await signer.getAddress())

    const contract = new ethers.Contract(contractAddress, abi, signer)

    const data = await contract.createNormalGate(userName, store.getState().walletAddress)

    console.log(data);

    return data
}

export default pushDirectToContract