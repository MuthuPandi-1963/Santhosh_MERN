import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const nav = useNavigate()
    function handleClick() {
        nav("/")
    }
  return (
    <div>
        <h1>Login Form</h1>
        <div className="">
        <label htmlFor="">Username</label>
        <input type="text" placeholder='enter a username'/>
        </div>
        <div className="">
        <label htmlFor="">Password</label>
        <input type="password" placeholder='enter a password'/>
        </div>
        <button>Login</button>

        <button onClick={handleClick}>Go to Home</button>

    </div>
  )
}
