import React from 'react'

const VestPages = () => {
  return (
    <>
      <div className="swapWrapper ">
        <div className="w-full mx-auto text-center">
          {/* <div className="text-yellow-200 rounded-full inline-block text-color-menu-light-active font-semibold p-4 ">
          {warningNotice}
        </div> */}
          <h1 className="mb-4 text-xxl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-4xl dark:text-white">
            We invest in the world’s potential
          </h1>
        </div>

        <div className="w-full h-18 mt-8 flex text-center">
          <button
            type="submit"
            className="w-auto mx-2 inline-flex items-center h-14 p-2 text-sm text-center 
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
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span className="hidden sm:inline-block text-center">
              Create Lock
            </span>
          </button>
        </div>

        <div className="mt-8">
        <div className="relative overflow-x-auto mx-2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded ">
            <thead className="text-xs text-gray-200 uppercase bg-indigo-800/90 dark:bg-gray-700 dark:text-gray-400">
              <tr className="h-14">
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
      </div>
    </>
  )
}

export default VestPages
