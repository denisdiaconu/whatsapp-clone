import { Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <Avatar />
            <div className="sidebar_right">
                <DonutLargeIcon />
                <ChatIcon />
                <MoreVertIcon />
            </div>
        </div>
        <div className="sidebar_search">

        </div>
        <div className="sidebar_chats">

        </div>
    </div>
  )
}

export default Sidebar