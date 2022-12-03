import { ethers } from 'ethers'
import abi from './abi.json'
import store from '../redux/store'

async function setDirectToContract() {
    let contractAddress = '0xCAb5B4e33Db07F345b8C10931Dd45ed519A61D3C'
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    console.log('Account:', await signer.getAddress())

    // const erc20Interface = new ethers.utils.Interface([
    //     'function insurence(string memory _name,uint _age, string memory _address,string memory link, string memory uri)'
    //   ])

    //   const data = erc20Interface.encodeFunctionData(
    //     'insurence', [name,age,Homeaddress,link,uri]
    //   )

    const contract = new ethers.Contract(contractAddress, abi, signer)

    const data = await contract.createNormalGate('Arnab', store.getState().walletAddress)

    return data
}

export default setDirectToContract