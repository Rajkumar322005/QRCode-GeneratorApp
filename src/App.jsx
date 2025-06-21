import React, { useEffect } from 'react'
import './styles/QRcode.css'
import QRCodeGenerator from './components/QRcode.jsx'

const App = () => {
  // Initialize theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem("qr-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="app-wrapper">
      <QRCodeGenerator />
    </div>
  )
}

export default App