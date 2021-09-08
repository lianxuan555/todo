import { Reducer, Dispatch } from 'redux'
import { produce } from 'immer'

import * as actionTypes from '../constants'
import { getRouteDataRequest } from '@/routes/api/route'

type RouteState = Partial<{
  title: string
}>

type RouteAction = {
  type: string
  data: Partial<RouteState>
}

/** immutable的fromJS返回类型是unknow */
const initialState = {
  title: '首页'
}

/** action */
export const routeJump = (title: string) => ({
  type: actionTypes.ROUTE_JUMP,
  data: {
    title
  }
})

/** 异步action */
export const getRouteData = (title: string) => {
  return (dispatch: Dispatch) => {
    getRouteDataRequest(title)
      .then((data) => {
        dispatch(routeJump(data.data))
      })
      .catch(() => {
        console.log('数据传输错误')
      })
  }
}

export const routeReducer: Reducer<RouteState, RouteAction> = (
  state = initialState,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.ROUTE_JUMP:
        draft.title = action.data.title
        break
      default:
        break
    }
  })
