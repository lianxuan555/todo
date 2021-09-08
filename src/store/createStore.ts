import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer
} from '@reduxjs/toolkit'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from '.'

export function configureStore_old(
  preloadedState: { route: { title: string } } | undefined
) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose<any>(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./index', () => store.replaceReducer(rootReducer))
  }

  return store
}

export function configureAppStore(preloadedState?: {} | undefined) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer as StoreEnhancer<{}, {}>]
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./index', () => store.replaceReducer(rootReducer))
  }

  return store
}
