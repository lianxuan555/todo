import { VFC } from 'react'

import { Icon } from '../icon'
import { Textarea } from '../textarea'
import './index.scss'

type EditProps = {}

export const Edit: VFC<EditProps> = (props) => {
  return (
    <div className="edit">
      <div className="edit-item">
        <Textarea className="edit-textarea" placeholder="请输入" />
        <div className="edit-menu">
          <Icon name="icon-finish" />
          <Icon name="icon-more" />
        </div>
      </div>
    </div>
  )
}
