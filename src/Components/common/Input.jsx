import React from 'react'

function Input({ type, placeholder, bg, onChange }) {

    function onHandle(evt) {
        console.log(evt);
    }

    return (
        <div>
            <input type={type} placeholder={placeholder} style={{ backgroundColor: bg, border: "none", color: "black" }}
                onChange={onChange} />
        </div>
    )
}

export default Input