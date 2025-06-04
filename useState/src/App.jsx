import React, { useState } from 'react'
import Counter from './Counter'
import String from './String'
import Login from './Login'
import Boolean from './Boolean'

export default function App() {
  const [val,setVal] = useState(100)
  const [a,seta] = useState(10)
  // let a  = 10
  function handleClick (){
    seta(a+1)
    setVal(val+1)
    console.log("a : " + a);
    console.log("val : "+val);

    
  } 
  return (
    <div>

      <h1>{a}</h1>
      <h1>{val}</h1>
      <button onClick={handleClick}>increment a </button>
      <Counter/>
      <String/>
      <Login/>
      <Boolean/>
    </div>
  )
}
