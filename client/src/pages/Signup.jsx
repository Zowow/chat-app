import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom';

export default function Signup() {
    const {signup, error, isLoading} = useSignup();


    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "male"
    })

    const handleInputChange = (e) => {
        setInputs({ ...inputs, gender: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }
    
    return (
        <div className='signup'>
        <h1>Welcome to Signup Page</h1>
        <form onSubmit={handleSubmit}>
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
            <div>
                <label htmlFor="gender">Gender: </label>
                <select
                    name="gender"
                    value={inputs.gender}
                    onChange={handleInputChange}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <Link to="/login">Already have an account? Click here</Link>
            <input type="submit" disabled={isLoading}/>
            {error && <div className='error'>{error}</div>}
        </form>
        </div>
    )
}
