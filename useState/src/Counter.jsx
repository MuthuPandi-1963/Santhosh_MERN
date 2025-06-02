import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    function handleDecrement(){
        setCount(count-1)
    }
    function handleIncrement(){
        setCount(count+1)
    }
  return (
    <div className='count'>
        <button onClick={handleDecrement}>Decrement</button>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
