import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { UiModeProvider } from './context/UiModeContext'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiModeProvider>
      <AuthProvider>
        <div className='center-main'>
          <App />
        </div>
      </AuthProvider>
    </UiModeProvider>
  </React.StrictMode>,
)
