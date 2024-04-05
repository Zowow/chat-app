import React, { useState } from 'react'

export default function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    return (
        <div className='login'>
        <h1>Welcome to Login Page</h1>
        <form action="">
            <input 
                type="text"
                value={username}
                placeholder='Username here'
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password"
                value={password}
                placeholder='Password here'
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" />
        </form>
        </div>
    )
}
