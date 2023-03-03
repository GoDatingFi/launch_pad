import React from 'react'

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
      <div className="swapList p-6 mx-auto ">
        {dataSwap.map((item, index) => (
          <div
            key={index}
            className="swapItem  flex items-center justify-between"
          >
            <div className="icon-swap flex items-center">
              <div className="w-10">
                <img className="w-full" src={ImageEth} alt="Eth" />
              </div>
              <div className="ml-1 text-ellipsis overflow-hidden whitespace-nowrap">
                {item.name}
              </div>
            </div>
            <div className="icon-number">
              <input
                type="text"
                autoComplete="false"
                aria-invalid="false"
                placeholder="0.00"
                disabled={index !== 0 ?? true}
                className={`text-ellipsis text-2xl w-full focus:outline-none ${
                  index !== 0 ? 'bg-transparent' : ''
                }`}
              />
            </div>
            <div className="icon-content flex justify-start flex-col h-full">
              <p className="m-0 mr-4 mt-1 text-xs text-gray-500 overflow-hidden whitespace-nowrap ov text-ellipsis">
                Balance: 0.00
              </p>
            </div>
          </div>
        ))}

        <div className="text-xl  font-bold justify-center cursor-pointer bg-primary mt- flex items-center swapItem ">
          Swap
        </div>
      </div>
    </div>
  )
}

export default SwapPages
