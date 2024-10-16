import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate();

    function goToLogin() {
        navigate("/login");
    }

    return (
        <div>Register
            <button onClick={() => goToLogin()}>go to Login</button>
        </div>
    )
}

export default Register