import React, { useState } from 'react'
import Logo from '../../static/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import dataMenuItem from '../../data/menu-json.json'
import { Button } from 'antd'
import ThemeSwitch from './themeSwitch'
import ImageEth from '../../static/images/ethereum.png'
import ImageEthSVG from '../../static/images/eth.svg'

let selectingSwapTypeDefault = [
  {
    name: 'ETH',
    logoSrc: ImageEthSVG,
    id: 1,
    code: 'ETH',
  },
  {
    name: 'ABC',
    logoSrc: ImageEth,
    id: 2,
    code: 'xxxxxxxxx',
  },
]

const allSwapTypes = [
  {
    name: 'ETH',
    logoSrc: ImageEthSVG,
    id: 1,
    code: 'ETH',
  },
  {
    name: 'ABC',
    logoSrc: ImageEth,
    id: 2,
    code: 'xxxxxx',
  },
  {
    name: 'ETH',
    logoSrc: ImageEthSVG,
    id: 3,
    code: 'UUUUUU',
  },
]

const SwapComponent = () => {
  const [selectingSwapType, setSelectingSwapType] = useState(
    selectingSwapTypeDefault
  )
  const [selectingSwapTypeHolding, setSelectingSwapTypeHolding] = useState(-1)

  const onSwitchSelectingType = (id: number) => {
    debugger
    if (id == 0) {
      let selectingSwapTypeTmp = [selectingSwapType[1], selectingSwapType[0]]
      setSelectingSwapType(selectingSwapTypeTmp)
    } else {
      if (selectingSwapTypeHolding == 0) {
        let replacementType = allSwapTypes.find((coin) => coin.id === id)
        if (replacementType) {
          let selectingSwapTypeTmp = [replacementType, selectingSwapType[1]]
          setSelectingSwapType(selectingSwapTypeTmp)
        }
      } else if (selectingSwapTypeHolding == 1) {
        let replacementType = allSwapTypes.find((coin) => coin.id === id)
        if (replacementType) {
          let selectingSwapTypeTmp = [selectingSwapType[0], replacementType]
          setSelectingSwapType(selectingSwapTypeTmp)
        }
      }
    }
  }

  const onSwitchSelectingTypeHold = (id: number) => {
    setSelectingSwapTypeHolding(id)
  }

  return (
    <div className="mt-6 relative w-full h-full max-w-xl md:h-auto">
      <div className="relative  bg-white rounded-lg  dark:bg-gray-700 text-center items-center mx-auto">
        <div className="p-6  mx-2">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Take advantage of Velodrome’s minimal slippage, low swapping fees,
            and deep liquidity
          </p>
          <ul className="my-4 space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50  group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <button
                  data-popover-target="popover-coin-filter"
                  data-popover-trigger="click"
                  type="button"
                  className="h-12 w-12 "
                  onClick={() => onSwitchSelectingTypeHold(0)}
                >
                  <div
                    data-popover-target="popover-coin-filter"
                    className="pl-1 py-1.5 text-gray-600/60"
                  >
                    <img
                      src={selectingSwapType[0].logoSrc}
                      className="h-12 w-12 mr-2"
                    />
                  </div>
                </button>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="filled_success"
                        aria-describedby="filled_success_help"
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-indigo-600 dark:border-indigo-500 appearance-none dark:text-white dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="filled_success"
                        className="absolute text-sm text-indigo-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        {selectingSwapType[0].name}
                      </label>
                    </div>
                    <p
                      id="filled_success_help"
                      className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 mb-2 text-end"
                    >
                      <span className="font-medium">Balance:</span> <b> 0.00</b>
                    </p>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <button
                onClick={() => onSwitchSelectingType(0)}
                className="h-12 w-12 -mt-6 text-center mx-auto bg-indigo-800 rounded-full flex text-center z-10 relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 m-auto text-center mx-auto text-white z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="z-10 -mt-6 flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50  group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <button
                  data-popover-target="popover-coin-filter"
                  data-popover-trigger="click"
                  type="button"
                  className="h-12 w-12 "
                  onClick={() => onSwitchSelectingTypeHold(1)}
                >
                  <div
                    data-popover-target="popover-coin-filter"
                    className="pl-1 py-1.5 text-gray-600/60"
                  >
                    <img
                      src={selectingSwapType[1].logoSrc}
                      className="h-12 w-12 mr-2"
                    />
                  </div>
                </button>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="filled_success"
                        aria-describedby="filled_success_help"
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-indigo-600 dark:border-indigo-500 appearance-none dark:text-white dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="filled_success"
                        className="absolute text-sm text-indigo-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        {selectingSwapType[1].name}
                      </label>
                    </div>
                    <p
                      id="filled_success_help"
                      className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 mb-2 text-end"
                    >
                      <span className="font-medium">Balance:</span> <b> 0.00</b>
                    </p>
                  </div>
                </span>
              </a>
            </li>
          </ul>
          <div>
            <a
              href="#"
              className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                className="w-3 h-3 mr-2"
                focusable="false"
                data-prefix="far"
                data-icon="question-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                ></path>
              </svg>
              Why do I need to connect with my wallet?
            </a>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div>
          <div className="w-full p-4 bg-white  rounded-lg  sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white">
                Price Info
              </h5>
            </div>
            <div className="flow-root">
              <div className="mt-2 grid overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                <div className="group relative bg-white dark:bg-gray-800 transition">
                  <div className="relative space-y-8 p-2">
                    <div className="space-y-2">
                      <h5 className="text-xl font-bold text-gray-700 dark:text-white transition group-hover:text-primary">
                        0.15
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        cbETH per APE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white dark:bg-gray-800 transition">
                  <div className="relative space-y-8 p-2">
                    <div className="space-y-2">
                      <h5 className="text-xl font-bold text-gray-700 dark:text-white transition group-hover:text-primary">
                        0.15
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        cbETH per APE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white dark:bg-gray-800 transition">
                  <div className="relative space-y-8 p-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="filled_success"
                        aria-describedby="filled_success_help"
                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-indigo-600 dark:border-indigo-500 appearance-none dark:text-white dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder="1.0"
                        value={'1.0'}
                      />
                      <label
                        htmlFor="filled_success"
                        className="absolute text-lg text-indigo-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        % Slippage
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full   rounded-lg  sm:py-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white">
                  Route
                </h5>
              </div>

              <ol className="flex items-center w-full pl-8">
                <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-indigo-800 after:border-4 after:inline-block dark:after:border-gray-800">
                  <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <img
                      src={selectingSwapType[0].logoSrc}
                      className="h-8 w-8 "
                    />
                  </span>
                </li>

                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-indigo-800 after:border-4 after:inline-block dark:after:border-gray-700">
                  <span className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 m-auto text-center mx-auto text-indigo-800 z-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </li>

                <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-indigo-800 after:border-4 after:inline-block dark:after:border-gray-800">
                  <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <img
                      src={selectingSwapType[0].logoSrc}
                      className="h-8 w-8 "
                    />
                  </span>
                </li>

                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-indigo-800 after:border-4 after:inline-block dark:after:border-gray-700">
                  <span className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 m-auto text-center mx-auto text-indigo-800 z-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </li>

                <li className="flex items-center w-full">
                  <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <img
                      src={selectingSwapType[1].logoSrc}
                      className="h-8 w-8 "
                    />
                  </span>
                </li>
              </ol>
            </div>

            <div className="w-full   rounded-lg  sm:py-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white">
                  Price impact: 12.2%
                </h5>
              </div>
            </div>

            <div className="w-full h-16 px-2 pt-2">
              <button className="w-full px-8 h-12 rounded-xl bg-indigo-700 inline-block text-white font-semibold hover:bg-indigo-900">
                Swap
              </button>

              <div>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center text-xs font-normal text-red-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 mr-2"
                    focusable="false"
                    data-prefix="far"
                    data-icon="question-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                    ></path>
                  </svg>
                  Some message here!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-popover-offset="30"
        data-popover
        id="popover-coin-filter"
        role="tooltip"
        className="absolute  z-10 invisible inline-block w-auto text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="px-3 py-3 bg-white dark:bg-gray-900">
              <label htmlFor="table-search" className="sr-only">
                WETH, USTC...
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" WETH, USTC..."
                />
              </div>
            </div>
            <table className="w-full mt-2 mb-4 text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {allSwapTypes.map((item, index) => (
                  <tr
                    onClick={() => onSwitchSelectingType(item.id)}
                    key={index}
                    className="w-auto px-6 bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 cursor-pointer hover:bg-indigo-300"
                  >
                    <td className="h-12 w-12 ml-2 flex justify-center text-center ">
                      <button className="h-12 w-12 flex text-center mx-auto bg-gray-50 rounded-full  text-center z-10  justify-center">
                        <img
                          src={item.logoSrc}
                          className="h-8 w-8  m-3 text-center"
                        />
                      </button>
                    </td>
                    <td className="w-full h-full  px-4 py-2 text-gray-900  dark:text-white">
                      <span className="font-bold ">{item.name} </span>
                      <br />
                      {item.name.toLocaleLowerCase()}
                    </td>
                    <td className="w-32 px-2 py-2">
                      <span className="font-bold "> 000.0 </span>
                      <br />
                      Balance
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  )
}

export default SwapComponent
