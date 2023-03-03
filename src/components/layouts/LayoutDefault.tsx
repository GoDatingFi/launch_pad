import { Layout } from 'antd'
import React from 'react'
import HeaderLayout from './Header'
const { Header, Content } = Layout

interface ILayoutDefaultProps {
  children: React.ReactNode
}
const LayoutDefault: React.FC<ILayoutDefaultProps> = ({
  children,
}: ILayoutDefaultProps) => {
  return (
    <div className="h-screen layout-bg">
      <div className="bg-transparent fixed w-full z-50 top-0 left-0 ">
        <HeaderLayout />
      </div>
      <Content className="relative min-h-screen p-content lg:p-content-mobile ">
        <div className="w-[calc(100%-180px)]  m-main-center max-w-main-width  sm:w-auto">
          {children}
        </div>
      </Content>
    </div>
  )
}
export default LayoutDefault
