import React from 'react'
import 'flowbite'
import SwapComponent from '../../components/layouts/Swap'
import SwapModal from '../../components/layouts/SwapModal'

const warningNotice =
  '⚠️ Notice: Remove moSOLID/WETH immediately, withdraw the pair. Monolith is discontinuing, you can split your moSOLID into veSOLID on alpha.mono.farm/convert -> "Split"⚠️⚠️'

const filterListOptions = [
  { text: 'My Deposits', id: 1 },
  { text: 'Show Active Gauges', id: 2 },
  { text: 'Show Stable Pools', id: 3 },
  { text: ' Show Volatile Pools', id: 4 },
]

const poolData = [
  { id: 1, name: 'USDC/WETH Volatile Pool' },
  { id: 2, name: 'USDC/WETH Volatile Pool' },
  { id: 3, name: 'USDC/WETH Volatile Pool' },
]

const LiquidityPages = () => {
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

      <div className="w-full h-24 mt-8 flex text-center">
        <button
          data-modal-target="crypto-manage-pool-item"
          data-modal-toggle="crypto-manage-pool-item"
          type="submit"
          className="w-64 mx-2 inline-flex items-center h-14 p-2 text-sm text-center 
          text-white transition duration-150 duration-300 ease-in-out rounded-xl outline-none 
          bg-indigo-800 sm:py-2 sm:px-6
            sm:text-base sm:font-medium hover:bg-cool-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="-ml-0.5 sm:-ml-1 sm:mr-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span className="hidden sm:inline-block text-center">
            Add Liquidity
          </span>
        </button>

        <form className="w-full">
          <div className="flex items-center px-2 p-1 rounded-xl bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
            <div className="pl-6 py-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              autoComplete="text"
              placeholder="ETH..."
              className="w-full p-0 pl-4 text-lg rounded-xl   dark:placeholder-white bg-transparent border-transparent focus:border-transparent focus:ring-0 !outline-none"
              type="text"
            />
          </div>
        </form>

        <div className="w-32 mr-12 text-center pb-3">
          <button
            data-popover-target="popover-filter"
            type="button"
            data-popover-placement="right"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <div
              data-popover-target="popover-filter"
              className="pl-1 py-1.5 text-gray-600/60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 m-auto fill-blue-900 dark:fill-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </button>
          <div
            data-popover
            id="popover-filter"
            data-popover-placement="right"
            role="tooltip"
            className="absolute z-50 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="p-3">
              <div className="flex">
                <div>
                  <p className="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white mb-5">
                    <a href="#" className="hover:underline">
                      Filter list
                    </a>
                  </p>
                  <div data-popper-arrow></div>
                  {filterListOptions.map((item, index) => (
                    <label
                      key={item.id}
                      className="relative inline-flex items-center mb-4 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                      <span className="w-48 text-left overflow-hidden ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div data-popper-arrow></div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative overflow-x-auto mx-2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded ">
            <thead className="text-xs text-gray-200 uppercase bg-indigo-800/90 dark:bg-gray-700 dark:text-gray-400">
              <tr className="h-12">
                <th scope="col" className="px-6 py-3 rounded-tl-xl">
                  Pair
                </th>
                <th scope="col" className="px-6 py-3">
                  Wallet
                </th>
                <th scope="col" className="px-6 py-3">
                  My LPs
                </th>
                <th scope="col" className="px-6 py-3">
                  My Staked LPs
                </th>
                <th scope="col" className="px-6 py-3">
                  TVL
                </th>
                <th scope="col" className="px-6 py-3">
                  Rewards
                </th>
                <th scope="col" className="px-6 py-3">
                  APR
                </th>
                <th scope="col" className="px-6 py-3 rounded-tr-xl">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {poolData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <button
                      data-modal-target="crypto-manage-pool-item"
                      data-modal-toggle="crypto-manage-pool-item"
                      type="submit"
                      className="mx-2 inline-flex items-center h-12 p-2 text-sm text-center 
                      transition duration-150 duration-300 ease-in-out rounded-xl outline-none sm:py-2 sm:px-2"
                    >
                      <span className="text-indigo-800 font-medium sm:inline-block text-center">
                        Manage
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
              <li>
                <a
                  href="#"
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <SwapModal />
    </div>
  )
}

export default LiquidityPages
