import React from 'react'
import ReactDOM from 'react-dom/client'
import { FingerprintProvider } from '@fingerprint/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FingerprintProvider
      apiKey={import.meta.env.VITE_FINGERPRINT_API_KEY}
    >
      <App />
    </FingerprintProvider>
  </React.StrictMode>
)
