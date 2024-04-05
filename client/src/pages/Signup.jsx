import React, { useState } from 'react'

export default function Signup() {

    const [inputs, setInputs] = useState({
        firstName: "",
        lastname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    

    return (
        <div className='signup'>
        <h1>Welcome to Signup Page</h1>
        <form action="">
            <input 
                type="text"
                value={inputs.firstName}
                placeholder='First Name'
                onChange={(e) => setInputs({...inputs, firstName: e.target.value})}
            />
            <input 
                type="text"
                value={inputs.lastName}
                placeholder='Last Name'
                onChange={(e) => setInputs({...inputs, lastName: e.target.value})}
            />
            <input 
                type="text"
                value={inputs.username}
                placeholder='Username'
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
            <input 
                type="password"
                value={inputs.password}
                placeholder='Password'
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
            <input 
                type="password"
                value={inputs.confirmPassword}
                placeholder='Confirm Password'
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
            {/* gender here */}
            <input type="submit" />
        </form>
        </div>
    )
}
