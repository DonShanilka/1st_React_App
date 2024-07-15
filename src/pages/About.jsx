
import '../App.css'
import BodyContent from '../Components/BodyContent/BodyContent'
import HeaaderContent from '../Components/HeaderContent/HeaaderContent'

function About() {

    const loggedin = false;
    const name = ["Shanilka", "Shashika"];
    const nameCount = name.length;

    return (
        <>
            <div id="wrapper">
                <HeaaderContent />

                <BodyContent>
                    <h3>About Page</h3>

                    {loggedin && <h4>Logged In</h4>}
                    {!loggedin && <h4>Logged Out</h4>}
                    {nameCount > 0 &&}
                </BodyContent>

            </div>
        </>
    )
}

export default About