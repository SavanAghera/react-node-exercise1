import React from 'react';
import { useState } from "react";
import styles from "../App.module.css";
import axios from 'axios';

function useMergeState(initialState) {
    const [state, setState] = useState(initialState);
    const setMergedState = (newState) =>
        setState((prevState) => Object.assign({}, prevState, newState));
    return [state, setMergedState];
}
const Login = () => {

    const [formstate, formsetstate] = useMergeState({
        email: "",
        password: ""
    });

    const callapi = (event) => {
        const data ={
            email:formstate.email,
            password:formstate.password
        };
        console.log(data);
        axios.post("http://localhost:5000/api/auth/",data)
        .then(response => {
            console.log(response.headers["x-auth"]);
            alert("user login successful");
        })
        .catch(error =>  alert(error.response.data));

    };

    const emailchange = (event) => {
        formsetstate({ email: event.target.value });
    };

    const passchange = (event) => {
        formsetstate({ password: event.target.value });
    };


    return (
        <div>
            <div className={styles.formdiv}>
                <form className={styles.form}>
                    <table>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formstate.email}
                                    onChange={emailchange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formstate.password}
                                    onChange={passchange}
                                />
                            </td>
                        </tr>
                    </table>
                </form>
                <button className={styles.button} value="Sign in" onClick={callapi}>Login</button>
            </div>
            <h1>{formstate.email}</h1>
            <h1>{formstate.password}</h1>
        </div>
    );
}

export default Login;
