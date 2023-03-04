import Web3 from 'web3'
import { ARB, Pancakeswap } from '../constants/blockchain-network'
import pancakeRouterV2Abi from '../constants/blc/abi/pancakeRouterV2.json'
import { mainnet } from '../constants/blc/mainnet'
import bep20abiB from '../constants/blc/abi/bep-20.json'
import axios from 'axios'
import { sample } from 'lodash'

const apiPancakeGetToken = 'https://api.pancakeswap.info/api/v2/tokens/'
const { BUSD, WBNB, ETH, MXY } = mainnet.TOKEN_ADDRESS

const { config } = ARB

const RPC_URL = sample(
    config.rpcUrls.filter((link: string) => link.startsWith('https'))
  ) as string
  

export const isMetaMaskInstalled = () => {
    // TODO check web3 undefined
    const { ethereum } = window
    return Boolean(
      ethereum && ethereum.isMetaMask
    )
  }
  
  export const getCurrentChain = (chainIdText?: string) => {
    if (window.ethereum && (chainIdText || window.ethereum.chainId)) {
      const chainId = chainIdText || window.ethereum.chainId
      if (chainId === config.chainId) {
        return {
          symbol: config.nativeCurrency.symbol,
          chainId: config.chainId,
          blockchainExplorerUrl: config.blockExplorerUrls[0],
        }
      }
    }
    return {
      symbol: '',
      chainId: '',
      blockchainExplorerUrl: '',
    }
  }
  
  export const checkNetwork = async () => {
    const { ethereum } = window
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: config.chainId }],
      })
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [config],
        })
      } else {
        throw switchError
      }
      // handle other "switch" errors
    }
  }
  
  interface Contract {
    contractAbi: any
    contractAddress: string
  }
  
  export const getContract = (contract: Contract) => {
    const web3 = new Web3(window.ethereum || RPC_URL)
    return new web3.eth.Contract(contract.contractAbi, contract.contractAddress)
  }
  
  // get contract by network with env
  export const getContractOfNetwork = (contract: Contract) => {
    const web3 = new Web3(RPC_URL)
    return new web3.eth.Contract(contract.contractAbi, contract.contractAddress)
  }
  
  export const signatureMessage = async (
    publicAddress: string,
    nonce: number
  ) => {
    const web3 = new Web3(window.ethereum)
    return await web3.eth.personal.sign(
      `I am signing my one-time nonce: ${nonce}`,
      publicAddress,
      ''
    )
  }
  
  export const disconnectMetaMask = () => {
    sessionStorage.removeItem('account')
    if (window.ethereum) {
      window.ethereum.removeAllListeners()
    }
  }
  
  export const getBalanceOf = async (account: string) => {
    if (!isMetaMaskInstalled() || !account) {
      return 0
    }
    const web3 = new Web3(window.ethereum)
    const balance = await web3.eth.getBalance(account)
    return web3.utils.fromWei(balance)
  }
  
  export const getBalanceOfToken = async (
    account: string,
    contractToken: any
  ) => {
    // current
    if (!isMetaMaskInstalled() || !account) {
      return 0
    }
    const web3 = new Web3(window.ethereum)
    const contract = getContract({
      contractAbi: bep20abiB,
      contractAddress: contractToken,
    })
    const balance = await contract.methods.balanceOf(account).call()
    return web3.utils.fromWei(balance)
  }
  
  export const getPriceWBNB = async () => {
    const web3 = new Web3(mainnet.config.rpcUrls[0])
    const contract = new web3.eth.Contract(pancakeRouterV2Abi as any, Pancakeswap)
    const [amount, value] = await contract.methods
      .getAmountsOut('100', [WBNB, BUSD])
      .call()
    return value / amount
  }
  export const getPriceBUSD = async () => {
    return 1
  }
  
  export const getPriceETH = async () => {
    const web3 = new Web3(mainnet.config.rpcUrls[0])
    const contract = new web3.eth.Contract(pancakeRouterV2Abi as any, Pancakeswap)
    const [amount, value] = await contract.methods
      .getAmountsOut('100', [ETH, BUSD])
      .call()
    return value / amount
  }
  
  export const getPriceMXY = async () => {
    try {
      const res = await axios.get<any>(apiPancakeGetToken + MXY)
      return res.data.price
    } catch (error) {
      console.log({ error })
      return 0
    }
  }
  
  export const makeBatchRequest = async (calls: any[], callFrom: any) => {
    const web3 = new Web3(RPC_URL)
    const batch = new web3.BatchRequest()
    const arr: any[] = []
    await new Promise((resolve, reject) => {
      calls.forEach((call: any) => {
        if (call) {
          const req = call.request({ from: callFrom }, (err: any, data: any) => {
            if (err) reject(err)
            arr.push(data)
            resolve(data)
          })
          batch.add(req)
        }
      })
      batch.execute()
    })
    return arr
  }
  