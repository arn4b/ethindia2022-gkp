import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import { useDispatch } from 'react-redux'
import { setAddress, clearAddress } from '../../redux/slice'
import { truncateAddress } from '../../utils/utils.js'
import PrimaryButton from './PrimaryButton'

let web3Modal;

if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
        network: 'testnet', // optional
        cacheProvider: true, // optional
        providerOptions: {}, // required
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
        console.log("disconnect caled")
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
