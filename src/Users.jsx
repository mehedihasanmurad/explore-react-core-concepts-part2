import { useEffect, useState } from "react"

export default function Users() {
    // 1. declare a state to hold hthe data
    // 2. useEffect with call back and dependency array
    // 3.use fetch to load data


    const [count, setCount]= useState([]);
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setCount(data))
    },[])

    return(
        <div>
            <h2>Users : {count.length}</h2>
        </div>
    )
}