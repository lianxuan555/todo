import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import { renderRoutes } from 'react-router-config'

import './App.css'

const App = () => {
  return <Router>{renderRoutes(routes)}</Router>
}

export default App
