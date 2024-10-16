
function Button({ text, bgColor, buttonClick }) {

    // function clickMe(text) {
    //     alert(text);
    // }


    return (
        <div>
            <button className="btn" style={{ backgroundColor: bgColor }} onClick={() => buttonClick(text)}>{text}</button>
        </div>
    )
}

export default Button;