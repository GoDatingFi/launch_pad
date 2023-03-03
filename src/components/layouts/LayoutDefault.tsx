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
    <Layout className="h-screen bg-backgroundLight bg-no-repeat bg-cover">
      <Header className="bg-transparent fixed w-full z-50 top-0 left-0 sm:px-5">
        <HeaderLayout />
      </Header>
      <Content className="relative min-h-screen p-content lg:p-content-mobile sm:px-5">
        <div className="w-[calc(100%-180px)]  m-main-center max-w-main-width  sm:w-auto">
          {children}
        </div>
      </Content>
    </Layout>
  )
}
export default LayoutDefault
