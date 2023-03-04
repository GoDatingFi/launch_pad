export const config = {
    chainName: 'Binance Smart Chain Mainnet',
    chainId: '0x38',
    rpcUrls: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org',
    ],
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    blockExplorerUrls: ['https://bscscan.com'],
  }
  
  const TOKEN_ADDRESS: Record<string, string> = {
    USD: '',
    BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    BNB: '0x0000000000000000000000000000000000000000',
    WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    ETH: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    MXY: '0x965d3704de812f5e1e7eef1ac22fe92174258bd9',
  }
  
  const CHEST_REWARD = '0x2260e2a78a60c0611427C798E5832C5F7da8e12C'
  
  export const mainnet = {
    config,
    TOKEN_ADDRESS,
    CHEST_REWARD,
  }
  