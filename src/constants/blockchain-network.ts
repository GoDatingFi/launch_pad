import config from "../config"
import { mainnet } from "./blc/mainnet"
import { testnet } from "./blc/testnet"

export const ARB = config.isProduction ? mainnet : testnet

export const contractBNB = '0x0000000000000000000000000000000000000000'
export const Pancakeswap = '0x10ED43C718714eb63d5aA57B78B54704E256024E'