import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import * as PushAPI from '@pushprotocol/restapi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { useDispatch } from 'react-redux'
import { setAddress, clearAddress, setSecretAddress } from '../../redux/slice'
import { truncateAddress } from '../../utils/utils.js'
import PrimaryButton from './PrimaryButton'
import { useAccount, useConnect, useEnsName, useSigner } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { ChainId } from '@biconomy/core-types'
import SmartAccount from '@biconomy/smart-account'
let web3Modal
let CHANNEL_ADDRESS = '0x57120abE66aa035dc477a536F22765D51D9F38c7'

if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'testnet', // optional
    cacheProvider: true, // optional
    providerOptions: {}, // required
  })
}

async function checkIfUserSubscribed(user_address, channel_address) {
  const subscriptions = await PushAPI.user.getSubscriptions({
    user: user_address, // user address in CAIP
    env: 'staging',
  })
  for (const key of subscriptions) {
    if (key.channel === channel_address) {
      return true
    }
  }
  return false
}

async function subscribe(user_address, channel_address, library) {
  const _signer = library.getSigner(user_address)

  await PushAPI.channels.subscribe({
    signer: _signer,
    channelAddress: channel_address, // channel address in CAIP
    userAddress: user_address, // user address in CAIP
    onSuccess: () => {
      console.log('opt in success')
    },
    onError: (e) => {
      console.log(e)
      console.error('opt in error')
    },
    env: 'staging',
  })
}

const CustomButton = ({ ensName }) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                )
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                )
              }
              return (
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {ensName ? ensName : account.address}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
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
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  console.log(ensName)
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { data: signer } = useSigner()
  // const { address } = useAccount();
  const [smartAccount, setSmartAccount] = useState(null)
  const [scwAddress, setScwAddress] = useState('')
  const [scwLoading, setScwLoading] = useState(false)

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
        try {
          if (!(await checkIfUserSubscribed(accounts[0], CHANNEL_ADDRESS))) {
            subscribe(accounts[0], CHANNEL_ADDRESS, library)
          }
        } catch (e) {
          console.error(e)
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

  useEffect(() => {
    async function setupSmartAccount() {
      setScwAddress('')
      setScwLoading(true)
      const walletProvider = new ethers.providers.Web3Provider(
        signer?.provider?.provider,
      )
      const smartAccount = new SmartAccount(walletProvider, {
        activeNetworkId: ChainId.POLYGON_MUMBAI,
        supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
        networkConfig: [
          {
            chainId: ChainId.POLYGON_MUMBAI,
            dappAPIKey: '59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3',
          },
        ],
      })
      await smartAccount.init()
      const context = smartAccount.getSmartAccountContext()
      setScwAddress(context.baseWallet.getAddress())
      setSmartAccount(smartAccount)
      setScwLoading(false)
      dispatch(setSecretAddress(smartAccount))
    }
    if (signer?.provider && address) {
      setupSmartAccount()
      console.log('Provider...', signer?.provider)
    }
  }, [, address, signer?.provider])

  const refreshState = () => {
    setAccount()
    setChainId()
    setNetwork('')
  }

  const disconnect = useCallback(async () => {
    console.log('disconnect called')
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
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }

    if (account) dispatch(dispatch(setAddress(account)))
  }, [provider, disconnect, error, account, dispatch])

  return (
    <div>
      <CustomButton ensName={ensName} />
    </div>
  )
}
