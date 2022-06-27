import React, { useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import db from '../firebase';

function SidebarChat({ id, name, newChat }) {

    const createChat = () => {
        const room = prompt('Please enter the chat name:')
        if(room) {
            db.collection('rooms').add({
              name: room,
            })
        }
    }

  return !newChat ? (
    <div className="sidebar_chat">
        <Avatar src={`https://avatars.dicebear.com/api/gridy/${Math.random()}.svg`} />
        <div className='sidebar_chat_details'>
            <h2>{name}</h2>
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