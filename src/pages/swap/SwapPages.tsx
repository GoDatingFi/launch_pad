import React from 'react'
import SwapComponent from '../../components/layouts/Swap'

import ImageEth from '../../static/images/ethereum.png'

const dataSwap = [
  {
    name: 'ETH',
  },
  {
    name: 'AURA',
  },
]
const SwapPages = () => {
  return (
    <div className="swapWrapper ">
      <div className="w-full mx-auto text-center">
        {/* <div className="text-yellow-200 rounded-full inline-block text-color-menu-light-active font-semibold p-4 ">
        {warningNotice}
      </div> */}
        <h1 className="mb-4 text-xxl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-4xl dark:text-white">
          We invest in the world’s potential
        </h1>
      </div>
      <div className="mt-8 flex justify-center">
        <SwapComponent />
      </div>
    </div>
  )
}

export default SwapPages
