import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <Avatar />
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
            <SidebarChat newChat/>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar