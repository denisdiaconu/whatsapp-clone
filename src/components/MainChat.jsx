import React, { useState, useEffect } from 'react'
import './MainChat.css'
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MainChat() {
    const [util, setUtil] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setUtil(`https://avatars.dicebear.com/api/gridy/${Math.random()}.svg`);
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(input);

        setInput('');
    }


  return (
    <div className="main_chat">
        <div className='chat_top'>
            <Avatar src={util} />
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
                <input type="text" value={input} onChange={a => setInput(a.target.value) } placeholder="Type a message" />
                <button onClick={sendMessage} type='submit'>Send</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default MainChat