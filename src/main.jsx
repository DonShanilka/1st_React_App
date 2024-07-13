import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyChannel from './Components/MyChannel/MyChannel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <App/> meka component ekak */}
    <MyChannel></MyChannel>
  </React.StrictMode>,
)


// <App/> Meka Self Closing tag ekak
// <App></App> me dhekama ekai