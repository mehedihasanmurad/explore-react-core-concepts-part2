import { useState } from "react"


export default function Counter() {
    const [count,setCount] = useState(0);
    const increaseHandle = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const decreaseHandle = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <div style={{border: '3px dashed yellow', padding:'10px', margin:'10px'}}>
            <h3>Counter : {count}</h3>
            <button onClick={increaseHandle}>Increase</button>
            <button onClick={decreaseHandle}>Decrease</button>
        </div>
    )
}