import React from 'react'
import { useLogout } from '../hooks/useLogout'

const Welcome = ({user}) => {
  const {logout} = useLogout();

  const handleClick = () => {
    logout()
  }

  return (
    <div className='welcome'>
      <h1>Welcome {user.firstName}</h1>
      <img src={user.profilePic} alt="profile-picture" className='welcome-profile-pic'/>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Welcome
