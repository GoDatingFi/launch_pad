import { ARB } from "../constants/blockchain-network";
import { status } from '../constants/connect'
import { checkNetwork, disconnectMetaMask, isMetaMaskInstalled } from "../utils/web3";


export const UPDATE_WEB3 = 'UPDATE_WEB3'
export const SET_ERROR = 'SET_ERROR'
export const GET_BALANCE = 'GET_BALANCE'
export const SET_CONTRACT = 'SET_CONTRACT'
export const SET_CANCEL = 'SET_CANCEL'
export const SET_BUY_ITEM = 'SET_BUY_ITEM'
export const SET_OBJECT_FILTER = 'SET_OBJECT_FILTER'
export const RESET_OBJECT_FILTER = 'RESET_OBJECT_FILTER'
export const ON_CHANGE_TAB = 'ON_CHANGE_TAB'

const { TOKEN_ADDRESS } = ARB

let interval: any


export const web3Disconnect = () => async (dispatch: any) => {
    if (interval) {
      clearInterval(interval)
    }
    dispatch({
      type: UPDATE_WEB3,
      data: {
        account: '',
        balance: '',
        connector: '',
        status: status.DISCONNECTED,
        chainId: '',
        symbol: '',
      },
    })
    await logout()
  }


  export const refreshBalance = () => async (dispatch: any, getState: any) => {
    const { account } = getState()
    // TODO get Balance of account
    // const balance = await getBalanceOf(account)
    // dispatch({
    //   type: UPDATE_WEB3,
    //   data: {
    //     balance,
    //   },
    // })
  }


  export const web3Connect = (typeWallet: string) => async (dispatch: any) => {
    try {
      if (!isMetaMaskInstalled()) {
        window.open('https://metamask.io/download.html')
        return
      }
      dispatch({
        type: UPDATE_WEB3,
        data: {
          status: status.CONNECTING,
        },
      })
  
      await checkNetwork()
  
      // Request account access if needed
      const newAccounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      const [account] = newAccounts
    // TODO login
    //   await login(account)
    //   setAccount(account, typeWallet)
    //   const data = getCurrentChain()
    //   dispatch({
    //     type: UPDATE_WEB3,
    //     data: {
    //       connector: typeWallet,
    //       status: status.CONNECTED,
    //       account,
    //       ...data,
    //     },
    //   })
    //   dispatch(refreshBalance())
    //   dispatch(getBalanceOfAddress())
    //   interval = setInterval(() => {
    //     dispatch(getBalanceOfAddress())
    //   }, 5000)
      window.ethereum.on('chainChanged', async () => {
        // const data = getCurrentChain(chainId)
        // dispatch({
        //   type: UPDATE_WEB3,
        //   data: data
        // })
        // dispatch(refreshBalance())
        dispatch(web3Disconnect())
      })
  
      window.ethereum.on('accountsChanged', async (newAccounts: any) => {
        const [account] = newAccounts
        // TODO disconenct when account change
        // const accountStorage = getAccount()
        // if (accountStorage.account !== account) {
        //   dispatch(web3Disconnect())
        // }
      })
    } catch (err) {
      dispatch({
        type: UPDATE_WEB3,
        data: {
          status: status.ERROR,
        },
      })
    }
  }


  export const getPrice = () => async (dispatch: any) => {
    const priceBnb = 0
    const priceBusd = 0
    const priceEth = 0
    const priceMxy = 0
  
    dispatch({
      type: UPDATE_WEB3,
      data: {
        priceBnb,
        priceBusd,
        priceEth,
        priceMxy,
      },
    })
  }
  export const getBalanceOfAddress =
    () => async (dispatch: any, getState: any) => {
      const { account } = getState()
      const balanceOfBUSD = 0
      const balanceOfETH = 0
      const balanceOfBNB = 0
      const balanceOfMXY = 0
      dispatch({
        type: UPDATE_WEB3,
        data: {
          balanceOf: {
            BUSD: balanceOfBUSD,
            ETH: balanceOfETH,
            BNB: balanceOfBNB,
            MXY: balanceOfMXY,
          },
        },
      })
    }


    export const logout = async () => {
        disconnectMetaMask()
        // const refreshToken = getRefreshToken()
        // sessionStorage.removeItem('user')
        // if (refreshToken) {
        //   // TODO call api login
        // }
      }
      