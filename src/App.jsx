
import { useState } from 'react';
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent'

function App() {
  // let num1 = 10;

  const [num1, serNum1] = useState(10)
  const [count, setCount] = useState(0)

  function handleClik() {
    // num1 = 20;

    serNum1(20)
    // alert(serNum1)
  }

  const decrenent = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div id="wrapper">
        <HeaaderContent />

        <BodyContent>
          <h3>Counter</h3>
          <button onClick={increment}>+</button>
          <button onClick={decrenent}>-</button>
          <p>{count}</p>
        </BodyContent>

      </div>
    </>
  )
}

export default App
