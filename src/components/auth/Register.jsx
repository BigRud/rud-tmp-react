import React from 'react';
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router";


const Register = () => {

    const [name, SetName] = useState()
    const [password, SetPassword] = useState()

    const navigate = useNavigate()

    function cumBat(e) {
        e.preventDefault()

        // axios.defaults.withCredentials = true
        axios.post('http://localhost:5000/register', {
            username: name,
            password: password
        }).then( function (response) {
            if (response.status === 200) {
                navigate('/')
            } else {
                console.log("Not Registrated")
            }
        }).catch( (e) => {
            console.log(e)
        })
    }

    return (
        <div>
            <form>
                <label>Login</label>
                <input type="text" value={name} placeholder="enter you nickname" name="username" onChange={e => SetName(e.target.value)}/>
                <label>Password</label>
                <input type="text" value={password} placeholder="okay, give me a password" name="password" onChange={e => SetPassword(e.target.value)}/>

                <button onClick={cumBat}>in there</button>
            </form>
        </div>
    );
};

export default Register;