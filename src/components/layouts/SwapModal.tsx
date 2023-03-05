import React from 'react'
import Logo from '../../static/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import dataMenuItem from '../../data/menu-json.json'
import { Button } from 'antd'
import ThemeSwitch from './themeSwitch'
import SwapComponent from './Swap'
const SwapModal = () => {
  return (
    <div
      id="crypto-manage-pool-item"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden bg-indigo-800/75 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
    >
      <div className="relative w-full h-full max-w-xl md:h-auto">
        <div className="relative bg-white rounded-lg dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="crypto-manage-pool-item"
          >
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
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-6">
            <SwapComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapModal
