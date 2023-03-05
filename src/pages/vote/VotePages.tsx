import React from 'react'

const VotePages = () => {
  return (
    <>
      <div className="relative fixed w-full h-full">
        <div
          id="toast-notification"
          className="fixed w-full bottom-12 justify-center w-auto max-w-xs p-4 text-white bg-indigo-800 rounded-lg shadow dark:bg-gray-800 dark:text-gray-100"
          role="alert"
        >
          <div className="flex items-center -mb-5">
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-notification"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="relative inline-block shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
            <div className="ml-3 text-sm font-normal">
              <div className="text-lg font-bold text-gray-150 dark:text-white">
                0%
              </div>
              <div className="text-sm font-normal">Voting Power Used</div>
            </div>
          </div>
        </div>
      </div>
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
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <span className="hidden sm:inline-block text-center">
              Select your NFT
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

          <div className="w-64 mr-12 text-center text-center">
            <button
              type="button"
              className="h-full w-full mx-4 relative  items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="text-xs"> Next epoch:</span>
              <div className="px-3 py-1 text-xs font-medium leading-none text-center text-white bg-indigo-800 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                4d, 0h, 10m, 30s
              </div>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-yellow-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </button>
          </div>
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

export default VotePages
