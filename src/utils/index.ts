import { toFormat } from "./big"

export const roundingNumber = (
  amount: string,
  currency?: string,
  isAfter = true
) => {
  try {
    const value = toFormat(+amount, 4)
    if (!currency) return value
    return isAfter ? `${value}${currency}` : `${currency}${value}`
  } catch (err) {
    return ''
  }
}

export const formatWalletAddress = (address: string) => {
  if (!address) return ''
  return (
    address.substring(0, 6) +
    '...' +
    address.substring(address.length - 4, address.length)
  )
}

export const getAccount = () => {
  try {
    return JSON.parse(sessionStorage.getItem('account') || '')
  } catch (e) {
    return null
  }
}

export function numberWithCommas(x: number) {
    var parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }
  