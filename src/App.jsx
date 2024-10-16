
import { useEffect, useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent'
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import ButtonMUI from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Components/ButtonComponent/Button.jsx';
import Textinput from './Components/Textinput/Textinput.jsx';
import Card from './Components/CardComponent/Card.jsx';
import Mui from './pages/Mui.jsx';
import Axios from './pages/Axios.jsx';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';


function App() {

  return (
    <>
      <div id="wrapper">
        <Routes>
          <Route path='/' element={<Login />} key={"login-page"} />
          <Route path='/login' element={<Login />} key={"login-page"} />
          <Route path='/register' element={<Register key={"register-page"} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
