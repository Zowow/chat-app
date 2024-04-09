import React from 'react'

// Components
import SearchInput from './SearchInput';
import Conversations from './Conversations';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <SearchInput/>
            <Conversations/>
        </div>
    )
}

export default Sidebar;
