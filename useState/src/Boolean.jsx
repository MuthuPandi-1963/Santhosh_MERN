import React, { useState } from 'react'

export default function Boolean() {
    const [show,setShow] = useState(false)
    const  handleClick = ()=>setShow(prev=>!prev)
  return (
    <>
    {show ? 
    (<h1>Content Display</h1>) : 
    <h1>Content hide</h1>
    
    }
    <button onClick={handleClick}>Show or hide</button>
    </>
  )
}
