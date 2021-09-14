import { type } from 'os'
import React, { VFC } from 'react'
import classnames from 'classnames'
import { BaseComponent } from '../types/utils'

type IconProps = BaseComponent<{
  name: string
}>

export const Icon: VFC<IconProps> = (props) => {
  const { name, className } = props
  return <div className={classnames(className, 'icon', 'icon-font', name)} />
}
