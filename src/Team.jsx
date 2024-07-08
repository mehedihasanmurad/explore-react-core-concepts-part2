import { useState } from "react"

export default function Team() {

    const [count,setCount]= useState(11)

    const addHandle = () => {
        setCount(count + 1);
    }

    const reduceHandle = () => {
        setCount(count-1);
    }

    const playerStyle = {
        border: '3px solid purple',
        margin: '10px',
        padding: '10px',
        borderRadius: '8px'
    }
    return(
        <div style={playerStyle}>
            <h2>Player : {count}</h2>
            <button onClick={addHandle}>Add</button>
            <button onClick={reduceHandle}>Reduce</button>
        </div>
    )
}