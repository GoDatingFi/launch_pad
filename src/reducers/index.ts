import * as actions from '../actions'
import { status } from '../constants/connect'
import mxyAbi from '../constants/blc/abi/mxy.json'
import marketPlaceAbi from '../constants/blc/abi/marketplace.json'
import chestAbi from '../constants/blc/abi/chest.json'
import nftAbi from '../constants/blc/abi/erc721.json'
import lockerAbi from '../constants/blc/abi/locker.json'
import { contractTypes } from '../constants/enum'
import { ARB } from '../constants/blockchain-network'
import { PAGE_SIZE } from '../config'

const { TOKEN_ADDRESS } = ARB
const { USD, MXY } = TOKEN_ADDRESS

const filterDefault = {
  page: 1,
  limit: PAGE_SIZE,
  currency: USD,
  levels: [],
  sortBy: 'createdAt:desc',
  keyword: '',
  characters: [],
  battlePowers: [],
  price: [],
  ranks: [],
}

const initialState = {
  tabMyAssets: 1,
  usingToken: ['MXY', 'BUSD'],
  account: '',
  balance: '',
  status: status.DISCONNECTED,
  chainId: '',
  symbol: '',
  connector: '',
  blockchainExplorerUrl: ARB.config.blockExplorerUrls[0],
  netWorkName: 'Binance Smart chain',
  tokenApproved: {},
  priceBnb: 0,
  priceBusd: 1,
  priceEth: 0,
  priceMxy: 0.1,
  isError: false,
  isCancel: false,
  numberBuyItem: 0,
  totalVolume: 0,
  totalTransaction: 0,
  isShowOnR1: true,
  isShowTimeSkip: true,
  nft: {
    contractAddress: '',
    contractAbi: nftAbi,
  },
  mxySC: {
    contractAddress: MXY,
    contractAbi: mxyAbi,
  },
  marketplace: {
    contractAddress: '',
    contractAbi: marketPlaceAbi,
  },
  chest: {
    contractAddress: '',
    contractAbi: chestAbi,
  },
  locker: {
    contractAddress: '',
    contractAbi: lockerAbi,
  },

  balanceOf: {
    BUSD: 0,
    ETH: 0,
    WBNB: 0,
    BNB: 0,
    MXY: 0,
  },
  filter: filterDefault,
  notification: {
    isLoading: false,
    totalUnread: 0,
    data: [],
  },
}

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.ON_CHANGE_TAB:
      return {
        ...state,
        tabMyAssets: action.data.tabMyAssets,
      }
    case actions.UPDATE_WEB3:
      return {
        ...state,
        ...action.data,
      }
    case actions.GET_BALANCE:
      return {
        ...state,
        balance: action.balance,
      }
    case 'SAVE_TOKEN':
      sessionStorage.setItem(
        'tokenApproved',
        JSON.stringify(action.tokenApproved)
      )
      return {
        ...state,
        tokenApproved: action.tokenApproved,
      }
    case actions.SET_ERROR:
      return {
        ...state,
        ...action.data,
      }
    case actions.SET_CANCEL:
      return {
        ...state,
        ...action.data,
      }
    case actions.SET_BUY_ITEM:
      return {
        ...state,
        numberBuyItem: state.numberBuyItem + 1,
      }
    case 'SET_MODAL':
      return {
        ...state,
        [action.data.key]: action.data.value,
      }
    case 'SET_NOTIFICATION':
      return {
        ...state,
        notification: action.data,
      }
    case actions.SET_CONTRACT:
      state.nft.contractAddress = action.data.find(
        (o: any) => o.type === contractTypes.NFT
      ).contractAddress
      state.marketplace.contractAddress = action.data.find(
        (o: any) => o.type === contractTypes.MARKETPLACE
      ).contractAddress
      state.chest.contractAddress = action.data.find(
        (o: any) => o.type === contractTypes.CHEST
      ).contractAddress
      state.locker.contractAddress = action.data.find(
        (o: any) => o.type === contractTypes.LOCKER
      ).contractAddress
      return {
        ...state,
      }
    case actions.SET_OBJECT_FILTER:
      return {
        ...state,
        filter: action.data,
      }
    case actions.RESET_OBJECT_FILTER:
      return {
        ...state,
        filter: filterDefault,
      }
    default:
      return state
  }
}

export default rootReducer
