import React from 'react'
import './MainChat.css'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MainChat() {

    const sendMessage = (event) => {

    }


  return (
    <div className="main_chat">
        <div className='chat_top'>
            <Avatar src={`https://avatars.dicebear.com/api/gridy/${Math.random()}.svg`} />
            <div className='chat_top_details'>
                <h2>Room</h2>
                <p>last on</p>
            </div>
            <div className="chat_top_right">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />  
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            <p className={`chat_message ${true && "chat_rec"}`}>
                <span className="chat_name">Des</span>
                Hello my friend
                <span className="chat_time">7:34pm</span>
            </p>
        </div>
        <div className='chat_bottom'>
            <InsertEmoticonIcon />
            <form>
                <input type="text" placeholder="Type a message" />
                <button onclick={sendMessage} type='submit'>Send</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default MainChat