import React, { useState } from 'react'

export default function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleLogin = ()=>{
        console.log(username , password);
        
    }
  return (
    <>
    <h1>Login</h1>
    <input type="text" name=""  placeholder='enter a username' value={username} onChange={handleUsername} />
    <input type="password" name=""  placeholder='enter a password' value={password} onChange={handlePassword} />
    <button onClick={handleLogin}>Login</button>
    </>
  )
}
