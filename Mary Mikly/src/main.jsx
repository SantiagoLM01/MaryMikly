import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './routes/AppRouter'
import './App.css'
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </BrowserRouter>
)
