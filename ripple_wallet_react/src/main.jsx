import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UiModeProvider } from './context/UiModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiModeProvider>
      <div className='center-main'>
        <App />
      </div>
    </UiModeProvider>
  </React.StrictMode>,
)
