import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import './components/config/global'
import registerServiceWorker from './registerServiceWorker'

render(
  <App />,
  document.querySelector('#root')
)

registerServiceWorker()
