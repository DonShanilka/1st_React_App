
function Button(props) {

    // function clickMe(text) {
    //     alert(text);
    // }


    return (
        <div>
            <button className="btn" style={{ backgroundColor: props.bgColor }} onClick={() => props.buttonClick(props.text)}>{props.text}</button>
        </div>
    )
}

export default Button;