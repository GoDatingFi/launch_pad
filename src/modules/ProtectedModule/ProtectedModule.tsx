import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutDefault from '../../components/layouts/LayoutDefault'

const ProtectedModule = () => {
  return (
    <LayoutDefault>
      <Outlet />
    </LayoutDefault>
  )
}

export default ProtectedModule
