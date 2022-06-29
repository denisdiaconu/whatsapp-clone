import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db from '../firebase';
import { useStateValue } from '../redux/StateProvider';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <Avatar src={`${user?.photoURL}`} />
            <div className="sidebar_right">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />  
                </IconButton>
            </div>
        </div>
        <div className="sidebar_search">
            <div className="search_cont">
                <SearchIcon />  
                <input type="text" placeholder='Search or start a new chat' />

            </div>
        </div>
        <div className="sidebar_chats">
            <SidebarChat newChat />
            {rooms.map(room => (
                <SidebarChat key={room.id} id={room.id} name={room.data.name} />
            ))}
        </div>
    </div>
  )
}

export default Sidebar