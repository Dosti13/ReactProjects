import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const student = {
  name:"dosti",
  subject:"react",
  Sno:"08"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App  />

  
  </React.StrictMode>,
)
