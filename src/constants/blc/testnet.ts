export const config = {
    chainName: 'Binance Smart Chain Testnet',
    chainId: '0x61',
    rpcUrls: [
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-2-s1.binance.org:8545',
      'https://data-seed-prebsc-1-s2.binance.org:8545',
      'https://data-seed-prebsc-2-s2.binance.org:8545',
      'https://data-seed-prebsc-1-s3.binance.org:8545',
      'https://data-seed-prebsc-2-s3.binance.org:8545',
    ],
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.bscscan.com'],
  }
  export const TOKEN_ADDRESS: Record<string, string> = {
    USD: '',
    BNB: '0x0000000000000000000000000000000000000000',
    ETH: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378',
    WBNB: '0x97c012ef10edc79510a17272cee3ecbe1443177f',
    BUSD: '0x8301f2213c0eed49a7e28ae4c3e91722919b8b47',
    MXY: '0x9e8e38b289aeaf7ee1431da14afa50034ceade25',
  }
  const CHEST_REWARD = '0x21b29097AA56fA144e2c37bE5e2de66DFCA9C3F9'
  
  export const testnet = {
    config,
    TOKEN_ADDRESS,
    CHEST_REWARD,
  }
  