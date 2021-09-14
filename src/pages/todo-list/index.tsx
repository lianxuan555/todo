import React from 'react'
import { Edit } from '@/components/edit'
import './style/index.scss'

const TodoList: React.VFC = () => {
  return (
    <div className="todo-list">
      <div className="todo-list__wrapper">
        <Edit />
      </div>
    </div>
  )
}

export default TodoList
