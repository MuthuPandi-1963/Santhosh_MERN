import axios from 'axios'
import { useEffect, useState } from 'react';
export default function App() {
  const [user,setUser] = useState([])
  const [count,setCount] = useState(0)
  async function fetchUser() {
    const res = await axios.get("https://dummyjson.com/users")
    console.log(res.data);
    setUser(res.data.users)
  }

  function handleClick(){
    setCount(prev=>prev+1)
  }
  useEffect(  ()=>{
    fetchUser() 
  } ,[count])
  
  
  return (
    <>
      <button onClick={handleClick}>Add user</button>
    {user.map((val,id)=>(
      <h4>{val.firstName}</h4>
    ))}
    </>
  )
}
