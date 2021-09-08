import React from 'react'
import { RouteConfig } from 'react-router-config'

import { Redirect } from 'react-router-dom'

import TodoList from '../pages/todo-list'
import Container from '../pages/index'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Container,
    routes: [
      {
        path: '/todo-list',
        component: TodoList
      },
      {
        path: '/',
        component: () => <Redirect to="/todo-list" />
      }
    ]
  }
]

export default routes
