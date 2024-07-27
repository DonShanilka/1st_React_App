import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className='main-rect-card'>
            <img src={props.cimg} alt="" style={{ width: "100px", height: "200px" }} />
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <button>{props.buttonText}</button>
        </div>
    )
}

export default Card