import React from 'react';
import { useState } from "react";
import styles from "../App.module.css";
function useMergeState(initialState) {
    const [state, setState] = useState(initialState);
    const setMergedState = (newState) =>
        setState((prevState) => Object.assign({}, prevState, newState));
    return [state, setMergedState];
}
const Login = () => {

    const [formstate, formsetstate] = useMergeState({
        email: "",
        password: "",
    });

    const callapi = (event) => {
        //console.log(event.target[0].value)
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
                        <tr>
                            <td colSpan="2">
                                <button className={styles.button} value="Sign in" onClick={callapi}>
                                    Login
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <h1>{formstate.email}</h1>
            <h1>{formstate.password}</h1>
        </div>
    );
}

export default Login;
