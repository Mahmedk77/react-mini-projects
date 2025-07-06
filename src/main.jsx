import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './Accordain.css'
import './App.css'

import App from './App.jsx'
// import ColorPicker from './ColorPicker.jsx'

// import Index from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
