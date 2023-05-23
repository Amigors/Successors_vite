import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserInfo from "./components/custom/userInfo/UserInfo";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <App />
        <UserInfo/>
  </React.StrictMode>,
)
