import React, { useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat({ newChat }) {

    useEffect(() => {

    }, [])

    const createChat = () => {
        const room = prompt('Please enter the chat name')
        if(room) {
            console.log('working')
        }
    }

  return !newChat ? (
    <div className="sidebar_chat">
        <Avatar src={`https://avatars.dicebear.com/api/gridy/${Math.random()}.svg`} />
        <div className='sidebar_chat_details'>
            <h2>Room</h2>
            <p>message</p>
        </div>
    </div>
  ): (
    <div onClick={createChat} className="sidebar_chat">
        <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat