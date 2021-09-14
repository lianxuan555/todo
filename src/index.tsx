import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@/static/icon-font/iconfont.css'
import 'normalize.css'
import App from './App'
import { configureAppStore } from '@/store/createStore'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

const store = configureAppStore()

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
