import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Global.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
)
