
import { useEffect, useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent'

function App() {
  let num2 = 10;

  const [num1, serNum1] = useState(10)
  const [count, setCount] = useState(0)
  const [cliks, setCliks] = useState(0)

  function handleClik() {
    // num1 = 20;

    serNum2(20)
    // alert(serNum1)
  }

  const decrenent = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  // let myNumber = 10;
  // useEffect(() => {
  //   console.log("Hi")
  //   // if (myNumber == 5) {
  //   //   alert("equal to 50")
  //   // } else {
  //   //   alert("not equal to 50")
  //   // }
  // }, [count])

  useEffect(() => {
    document.title = `You Clicked ${cliks} times`
  }, [count])

  return (
    <>
      <div id="wrapper">
        <HeaaderContent />

        <BodyContent>
          <h3>Counter</h3>
          <button onClick={increment}>+</button>
          <button onClick={decrenent}>-</button>
          {/* <button onClick={handleClik}>Click</button> */}
          <p>{count}</p>

          <p>You clicked {cliks} Times</p>
          <button onClick={() => setCliks(cliks + 1)}>Click Me</button>

        </BodyContent>

      </div>
    </>
  )
}

export default App
