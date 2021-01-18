import React from 'react'
import { useState } from "react";
export default function Time() {
    let date = new Date();

    const [timestate , timeSetState] = useState({time:""});

    setInterval(()=>{   
        date = new Date();
        date = date.toTimeString().split(" ")[0];
        timeSetState({time:date});
    },1000);
    return (
        <div>
            <h2>{timestate.time.toString()}</h2>
        </div>
    )
}
