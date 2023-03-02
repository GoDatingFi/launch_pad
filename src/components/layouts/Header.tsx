import React from 'react'
import Logo from '../../static/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import dataMenuItem from '../../data/menu-json.json'
import { Button } from 'antd'
const HeaderLayout = () => {
  const navLinkClass = ({ isActive }: any) => {
    return isActive
      ? 'flex  items-center p-menu font-bold leading-tight text-lg text-color-menu-light-active hover:text-color-menu-light-active menu-active menu-item'
      : 'flex items-center p-menu font-semibold leading-tight text-lg text-color-menu-light hover:text-color-menu-light-active menu-not_active menu-item'
  }
  const navList = (
    <ul className="mb-4 mt-2 flex  gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1 ">
      {dataMenuItem.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            // className="flex items-center text-color-menu-light font-semibold leading-tight text-lg"
            className={navLinkClass}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
  return (
    <div className="headerContainer flex items-center justify-between text-blue-gray-900 pt-2">
      <div className="logoWrapper">
        <Link to={'/'}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="menuWrapper ">
        <div className="container mx-auto lg:mx-0 sm">{navList}</div>
      </div>
      <div className="navWrapper ">
        <Button
          size="large"
          className="bg-btn-connect inline-block   text-color-menu-light-active font-semibold border-connect"
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  )
}

export default HeaderLayout
