import React from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import Header from '@/components/header'
import '@/style/common.scss'

const Container: React.FC<RouteConfigComponentProps> = (props) => {
  const { route } = props
  return (
    <div>
      <Header />
      <div>{renderRoutes(route?.routes)}</div>
    </div>
  )
}

export default Container
