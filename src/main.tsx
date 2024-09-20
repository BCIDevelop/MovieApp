import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes/Router'
import { UserContextApp } from './context/UserContext'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextApp>
    <Router/>
    </UserContextApp>
  </StrictMode>,
)
