import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import toast from "react-hot-toast"

import {Link} from "react-router-dom"

export default function Login() {
    const {login,error,isLoading} = useLogin();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username,password)
    }

    return (
        <div className='login'>
        <h1>Welcome to Login Page</h1>
        <form  onSubmit={handleSubmit}>
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
            <Link to="/signup">Don't have an account yet? Click here</Link>
            <input disabled={isLoading} type="submit" />
            {/* {error && <div className='error'>{error}</div>} */}
        </form>
        </div>
    )
}
