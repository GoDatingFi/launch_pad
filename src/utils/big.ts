import Big from 'big.js'
import { numberWithCommas } from '../utils'

export const toFormat = (big: number, dp?: number) => {
  const unit = +('1' + '0'.repeat(dp || 0))
  const smallVal = big * unit
  if (smallVal <= 0) return '0'
  if (smallVal < 1) return big.toExponential()
  const convertedNumber = Math.round((big + Number.EPSILON) * unit) / unit
  return numberWithCommas(convertedNumber)
}

export const toFormatString = (
  big: Big,
  dp?: number,
  isExponential?: boolean,
  ts = ',',
  ds = '.'
) => {
  // ES6 defaults
  const temp =
    !isExponential || Big(1e21).gt(big)
      ? big.toFixed(dp, 0)
      : big.toExponential(dp, 0)
  const arr = temp.replace(/\.0+(?=$|e)/, '').split('.')
  if (arr[1]) {
    arr[1] = arr[1].replace(/0+($|e)/, '')
  }
  arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ts)
  return arr.join(ds)
}
