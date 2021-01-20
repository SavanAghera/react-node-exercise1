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
const SignUp = () => {

    const [formstate, formsetstate] = useMergeState({
        name: "",
        email: "",
        password: "",
    });

    const callapi = () => {
        const data = {
            name:formstate.name,
            email: formstate.email,
            password: formstate.password
        }
        console.log(data);  
        
        axios.get("https://stormy-dusk-21181.herokuapp.com/").then((response) =>console.log(response.data))
        .catch(error => console.log(error));

        axios.post("https://stormy-dusk-21181.herokuapp.com/api/users",data).then((response) => {
            console.log(response.data);
            alert("user successfully created");
        })
        .catch(error => alert(error.response.data));
    };
    
    const namechange = (event) => {
        formsetstate({ name: event.target.value });
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
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formstate.name}
                                    onChange={namechange}
                                />
                            </td>
                        </tr>
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
                <button className={styles.button} value="Sign in" onClick={callapi} > Sign in </button>
            </div>
            <h1>{formstate.name}</h1>
            <h1>{formstate.email}</h1>
            <h1>{formstate.password}</h1>
        </div>
    );
}

export default SignUp;
