import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/Common/stair.jsx'
import { NavBarProvider } from './context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBarProvider>
      <BrowserRouter>
        <Stair />
        <App />
      </BrowserRouter>
    </NavBarProvider>


  </StrictMode>,
)
