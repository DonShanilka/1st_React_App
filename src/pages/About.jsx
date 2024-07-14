
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent'
import HeaaderContent from './Components/HeaderContent/HeaaderContent'

function About() {

    return (
        <>
            <div id="wrapper">
                <HeaaderContent />

                <BodyContent>
                    <h3>About Page</h3>
                </BodyContent>

            </div>
        </>
    )
}

export default About