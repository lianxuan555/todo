import { type } from 'os'
import React, { VFC } from 'react'
import classnames from 'classnames'

type IconProps = {
  name: string
}

export const Icon: VFC<IconProps> = (props) => {
  const { name } = props
  return <div className={classnames('icon', 'iconfont', name)} />
}
