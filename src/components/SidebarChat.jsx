import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import db from '../firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, newChat }) {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
        db.collection('rooms').doc(id).collection('messages')
        .orderBy('timestamp', 'desc').onSnapshot(snapshot => (
          setMessages(snapshot.docs.map((doc) => 
            doc.data()
          ))
        ))
    }
  }, [id])

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
              <p>{messages[0]?.message}</p>
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