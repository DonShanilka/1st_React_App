function Button(props) {
    return (
        <div>
            <button onClick={props.event}>{props.text}</button>
        </div>
    )
}

export default Button;