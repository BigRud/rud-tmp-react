import React from 'react';
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";
import classes from "./styles/Login.module.css";
import {useNavigate} from "react-router";

const Login = () => {
    const [name, SetName] = useState('')
    const [password, SetPassword] = useState('')

    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()
        axios.defaults.withCredentials = true
        axios.post('http://localhost:5000/login',{
                username: name,
                password: password
            },
            {
                withCredentials: true
            })
            .then( function (response) {
                console.log(response)
                if (response.status === 200) {
                    alert(response.data)
                    if (response.data === 'You successfully logged in.') {
                        navigate('/login-success')
                    } else {
                        console.log("bebra")
                    }
                } else {
                    alert("Wrong username or password")
                }
            }).catch( (e) => {
            console.log(e)
        })
    }

    return (
        <div className={classes.loginBlock}>
            <form className={classes.loginForm}>
                <label>Login</label>
                <input type="text" value={name} placeholder="your login" name="username" onChange={e => SetName(e.target.value)}/>
                <label>Password</label>
                <input type="text" value={password} placeholder="your password" name="password" onChange={e => SetPassword(e.target.value)}/>

                <button onClick={login}>log in</button>
            </form>

            <h4>Don't have an account? <Link to="/register">Registration</Link></h4>
        </div>
    );
};

export default Login;