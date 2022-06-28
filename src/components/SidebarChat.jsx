import React, { useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import db from '../firebase';
import { Link } from 'react-router-dom';

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
    <Link to={`/rooms/${id}`}>
      <div className="sidebar_chat">
          <Avatar src={`https://avatars.dicebear.com/api/gridy/${Math.random()}.svg`} />
          <div className='sidebar_chat_details'>
              <h2>{name}</h2>
              <p>message</p>
          </div>
      </div>
    </Link>
  ): (
    <div onClick={createChat} className="sidebar_chat">
        <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat