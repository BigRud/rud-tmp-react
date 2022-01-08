import React from 'react';
import axios from "axios";

const Logout = () => {
    function logout() {
        axios.get('http://localhost:5000/logout')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log('you logged out')
            });
    }

    return (
        <div>
            <button onClick={logout}>LOGOUT</button>
        </div>
    );
};

export default Logout;