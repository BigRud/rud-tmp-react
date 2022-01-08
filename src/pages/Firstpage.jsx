import React from 'react';
import classes from "./styles/first page style/style.module.css";
import Login from "../components/auth/Login";

const Firstpage = () => {
    return (
        <div className={classes.page}>
            <h1>First Page</h1>
            <Login/>
        </div>
    );
};

export default Firstpage;