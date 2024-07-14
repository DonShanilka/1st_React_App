
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent'

function App() {
  let num1 = 10;

  function handleClik() {
    num1 = 20;
    alert(num1)
  }

  return (
    <>
      <div id="wrapper">
        <HeaaderContent />

        <BodyContent>
          <h3>Home Page</h3>
          <button onClick={handleClik}>Click</button>
          <p>{num1}</p>
        </BodyContent>

      </div>
    </>
  )
}

export default App
