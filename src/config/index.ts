const isProduction = process.env.REACT_APP_BLOCKCHAIN_NETWORK !== 'testnet'

export default {
  isProduction,
  apiUrl: process.env.REACT_APP_API_URL,
}

export const PAGE_SIZE = 12
