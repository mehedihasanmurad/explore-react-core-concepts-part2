import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert("Click the button");
  }

  const handleClick2 = () => {
    alert("Click the button 2")
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>
      
      <Team></Team>


      <Counter></Counter>
      {/* javascript a korci aivabe */}
      {/* <button onclick="handleClick()">Click Me</button> */}

      {/* simple function diye kora holo */}
      <button onClick={handleClick}>Click Me</button>

      {/* Arrow function diye kora holo */}
      <button onClick={handleClick2}>Click Me2</button>

      {/* Direct arrow function & simple function diyew kora jay inline a */}
      <button onClick={() => {alert("This is third alert")}}>Third</button>

      {/* vejailla kora mane jokhon kono function a parameter kora hoy tokhon ja korte hoy */}
      <button onClick={() => {addToFive(3)}}>Fourth</button>
    </>
  )
}

export default App
