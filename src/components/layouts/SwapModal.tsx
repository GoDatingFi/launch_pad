import React from 'react'
import Logo from '../../static/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import dataMenuItem from '../../data/menu-json.json'
import { Button } from 'antd'
import ThemeSwitch from './themeSwitch'
const SwapComponent = () => {
  return (
    <div
      id="crypto-swap-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 bg-indigo-800/75 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
    >
      <SwapComponent />
    </div>
  )
}

export default SwapComponent
