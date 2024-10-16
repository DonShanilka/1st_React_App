
import { useEffect, useState } from 'react'
import '../App.css'
import BodyContent from '../Components/BodyContent/BodyContent'
import HeaaderContent from '../Components/HeaderContent/HeaaderContent'

function Contact() {

    const [data, setData] = useState(0);

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <div id="wrapper">
                <HeaaderContent />
                <BodyContent>
                    <h3>Contact Page</h3> <br /> <br />
                    <button onClick={() => setData(data + 1)}>Click</button> <br /> <br />
                    <button onClick={() => setData("Shanilka")}>Click 2</button>
                </BodyContent>

            </div>
        </>
    )
}

export default Contact