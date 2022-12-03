import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import * as PushAPI from "@pushprotocol/restapi";

import { useDispatch } from 'react-redux'
import { setAddress, clearAddress } from '../../redux/slice'
import { truncateAddress } from '../../utils/utils.js'
import PrimaryButton from './PrimaryButton'

let web3Modal;
let CHANNEL_ADDRESS = "0x57120abE66aa035dc477a536F22765D51D9F38c7";

if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
        network: 'testnet', // optional
        cacheProvider: true, // optional
        providerOptions: {}, // required
    })
}

async function checkIfUserSubscribed(user_address, channel_address) {
    const subscriptions = await PushAPI.user.getSubscriptions({
        user: user_address, // user address in CAIP
        env: 'staging'
      });
    for (const key of subscriptions) {
        if (key.channel === channel_address) {
            return true;
        }
    }
    return false;
}


async function subscribe(user_address, channel_address, library) {
    const _signer = library.getSigner(user_address);
    
    await PushAPI.channels.subscribe({
        signer: _signer,
        channelAddress: channel_address, // channel address in CAIP
        userAddress: user_address, // user address in CAIP
        onSuccess: () => {
         console.log('opt in success');
        },
        onError: (e) => {
            console.log(e)
          console.error('opt in error');
        },
        env: 'staging'
      })
}


export default function ConnectToWallet() {
    const [provider, setProvider] = useState()
    const [library, setLibrary] = useState()
    const [account, setAccount] = useState()
    const [signature, setSignature] = useState('')
    const [error, setError] = useState('')
    const [chainId, setChainId] = useState()
    const [network, setNetwork] = useState()

    const dispatch = useDispatch()

    const connectToWallet = useCallback(async () => {
        try {
            const provider = await web3Modal.connect()
            const library = new ethers.providers.Web3Provider(provider)
            const accounts = await library.listAccounts()
            const network = await library.getNetwork()
            setProvider(provider)
            setLibrary(library)
            if (accounts) {
                setAccount(accounts[0])
                dispatch(setAddress(accounts[0]))
                try{
                    if (!await checkIfUserSubscribed(accounts[0],CHANNEL_ADDRESS)){
                        subscribe(accounts[0],CHANNEL_ADDRESS, library);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
            setChainId(network.chainId)
        } catch (error) {
            setError(error)
        }
    }, [dispatch])

    useEffect(() => {
        if (web3Modal.cachedProvider) {
            connectToWallet()
        }
    }, [connectToWallet])

    const refreshState = () => {
        setAccount()
        setChainId()
        setNetwork('')
    }

    const disconnect = useCallback(async () => {
        console.log("disconnect called");
        await web3Modal.clearCachedProvider()
        refreshState()
        dispatch(clearAddress())
    }, [dispatch])

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = (accounts) => {
                console.log('accountsChanged', accounts)
                if (accounts) setAccount(accounts[0])
            }

            const handleChainChanged = (_hexChainId) => {
                setChainId(_hexChainId)
            }

            const handleDisconnect = () => {
                console.log('disconnect', error)
                disconnect()
            }

            provider.on('accountsChanged', handleAccountsChanged)
            provider.on('chainChanged', handleChainChanged)
            provider.on('disconnect', handleDisconnect)

            return () => {
                if (provider.removeListener) {
                    provider.removeListener(
                        'accountsChanged',
                        handleAccountsChanged
                    )
                    provider.removeListener('chainChanged', handleChainChanged)
                    provider.removeListener('disconnect', handleDisconnect)
                }
            }
        }

        if (account) dispatch(dispatch(setAddress(account)))
    }, [provider, disconnect, error, account, dispatch])

    return (
        <div>
            <div className="flex">
                {account ? (
                    <PrimaryButton onClick={disconnect} name="Disconnect Wallet"></PrimaryButton>
                ) : (
                    <PrimaryButton onClick={connectToWallet} name="Connect Wallet">Connect Wallet</PrimaryButton>
                )}
                <PrimaryButton name={`Wallet Address: ${truncateAddress(account)}`}></PrimaryButton>
            </div>

            {/* {account ? navigate('/profile') : <>oh no take insurance</>} */}
        </div>
    )
}
