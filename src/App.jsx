
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


function App() {
  // let num2 = 10;

  // const [num1, serNum1] = useState(10)
  // const [count, setCount] = useState(0)
  // const [cliks, setCliks] = useState(0)
  // const [posts, setPosts] = useState([])

  // function handleClik() {
  //   // num1 = 20;

  //   serNum2(20)
  //   // alert(serNum1)
  // }

  // const decrenent = () => {
  //   setCount(count - 1)
  // }

  // const increment = () => {
  //   setCount(count + 1)
  // }

  // // let myNumber = 10;
  // // useEffect(() => {
  // //   console.log("Hi")
  // //   // if (myNumber == 5) {
  // //   //   alert("equal to 50")
  // //   // } else {
  // //   //   alert("not equal to 50")
  // //   // }
  // // }, [count])

  // useEffect(() => {
  //   document.title = `You Clicked ${cliks} times`
  // }, [count])

  // useEffect(() => {
  //   fetch("http://jsonplaceholder.typicode.com/users/1/posts")
  //     .then((resp) => resp.json())
  //     .then((blogPost) => setPosts(blogPost));

  //   console.log("run")
  // }, []);

  return (
    <>
      <div id="wrapper">
        <HeaaderContent />

        <BodyContent>

          {/* <Button text="Save" event={() => console.log("Save")} />
          <Button text="Update" event={() => console.log("Update")} />
          <Button text="Delete" event={() => console.log("Delete")} />;

          <Textinput /> */}

          <Card h1="Card 1" p="sasdgfah asgadgau ashhgaudg assgaiydg" buttonText="Button 1" cimg="src\assets\react.svg" />;


        </BodyContent>

      </div>
    </>
  )
}

export default App
