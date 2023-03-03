import React from 'react'

const warningNotice =
  '⚠️ Notice: Remove moSOLID/WETH immediately, withdraw the pair. Monolith is discontinuing, you can split your moSOLID into veSOLID on alpha.mono.farm/convert -> "Split"⚠️⚠️'

const LiquidityPages = () => {
  return (
    <div className="swapWrapper ">
      <div className="w-full mx-auto text-center">
        {/* <div className="text-yellow-200 rounded-full inline-block text-color-menu-light-active font-semibold p-4 ">
          {warningNotice}
        </div> */}
      </div>

      <div className="w-full h-24 mt-8 flex">
        <button
          type="submit"
          className="w-64 mx-2 inline-flex items-center h-14 p-2 text-sm text-center 
          text-white transition duration-150 duration-300 ease-in-out rounded-xl outline-none 
          bg-indigo-700 sm:py-2 sm:px-6
            sm:text-base sm:font-medium hover:bg-cool-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="44"
            height="44"
            className="-ml-0.5 sm:-ml-1 sm:mr-2 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>

          <span className="hidden sm:inline-block ">Add Liquidity</span>
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

        <div className="w-64 px-32 text-center py-2">Filter</div>
      </div>

      <div>
        <div className="relative overflow-x-auto mx-2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  USDC/WETH Volatile Pool
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  USDC/WETH Volatile Pool
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  USDC/WETH Volatile Pool
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>

        
        </div>
        <div className='mt-4 flex justify-end'>
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
    </div>
  )
}

export default LiquidityPages
