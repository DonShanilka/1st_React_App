import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mui from './pages/Mui.jsx'
import Axios from './pages/Axios.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Axios />,

  },
  {
    path: "/about",
    element: <About />,

  },
  {
    path: "/contact",
    element: <Contact />,

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


// <App/> Meka Self Closing tag ekak
// <App></App> me dhekama ekai