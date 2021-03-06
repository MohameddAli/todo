import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles.css'
import App from './app'

const Index = () => {
  return <App />
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Index />, rootElement)
