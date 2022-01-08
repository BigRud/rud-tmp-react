import React from 'react';
import axios from "axios";

const Protected = () => {
    function proroute() {
        axios.get('http://localhost:5000/protected-route')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                console.log('end of protected route')
            });
    }

    return (
        <div>
            <button onClick={proroute}>Protected</button>
        </div>
    );
};

export default Protected;