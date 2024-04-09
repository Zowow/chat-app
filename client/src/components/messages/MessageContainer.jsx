import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
    return (
        <div className='message-container'>
            Message Container

            <Messages/>
            <MessageInput/>
        </div>
    )
}

export default MessageContainer
