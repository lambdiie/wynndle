import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/index.css'
import 'react-tooltip/dist/react-tooltip.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>,
)
