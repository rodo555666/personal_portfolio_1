import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './partes/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app_con'> <App />  </div>
  
    <Header/>
  </React.StrictMode>,
)
