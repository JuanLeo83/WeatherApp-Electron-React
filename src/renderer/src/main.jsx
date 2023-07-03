import React from 'react'
import ReactDOM from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import App from './App'
import './assets/index.css'
import { messages } from './messages.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language} messages={messages[navigator.language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
)
