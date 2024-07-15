
import '../App.css'
import BodyContent from '../Components/BodyContent/BodyContent'
import HeaaderContent from '../Components/HeaderContent/HeaaderContent'

function About() {

    const loggedin = false;
    const name = ["Shanilka", "Nishith"];
    const nameCount = name.length;

    return (
        <>
            <div id="wrapper">
                <HeaaderContent />

                <BodyContent>
                    <h3>About Page</h3>

                    {loggedin && <h4>Logged In</h4>}
                    {!loggedin && <h4>Logged Out</h4>}
                    {nameCount > 0 && name.map((name) => {
                        return <h2>{name}</h2>
                    })}
                    {nameCount == 0 && <p>None Provided</p>}
                </BodyContent>

            </div>
        </>
    )
}

export default About