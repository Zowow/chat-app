import React from 'react'
import { useLogout } from '../hooks/useLogout'

// Components
import Sidebar from '../components/Sidebar';

const Home = ({user}) => {
    const {logout} = useLogout();

    const handleClick = () => {
      logout()
    }

    return (
      <div className='welcome'>
        {/* <h1>Welcome {user.firstName}</h1>
        <img src={user.profilePic} alt="profile-picture" className='welcome-profile-pic'/>
        <button onClick={handleClick}>Logout</button> */}
        <Sidebar/>
    
        
      </div>
    )
}

export default Home;
