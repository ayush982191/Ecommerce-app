import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/ProductContext.jsx'
import { FilterContextProviderr } from './context/FilterrContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  

  
    <AppProvider>
    <FilterContextProviderr>
    <App />
    </FilterContextProviderr>
    </AppProvider>
    
    
  </React.StrictMode>,
)
