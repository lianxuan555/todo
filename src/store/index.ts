import { combineReducers } from 'redux'

import { routeReducer } from './routeStore'

const rootReducer = combineReducers({
  route: routeReducer
})

export default rootReducer
