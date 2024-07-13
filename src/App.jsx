
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent'

function App() {

  return (
    <>
      <div id="wrapper">
        <HeaaderContent />
        <BodyContent>
          <button>Click</button>
        </BodyContent>

        <BodyContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure,
            omnis assumenda adipisci nostrum reprehenderit rem quia hic exercitationem laudantium, quis,
            voluptates harum? Error eaque repudiandae molestias optio nisi itaque?
          </p>
        </BodyContent>

        <BodyContent />

      </div>
    </>
  )
}

export default App
