
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent'

function App() {

  return (
    <>
      <div id="wrapper">
        <HeaaderContent />

        <BodyContent>
          <h3>Home Page</h3>
        </BodyContent>

      </div>
    </>
  )
}

export default App
