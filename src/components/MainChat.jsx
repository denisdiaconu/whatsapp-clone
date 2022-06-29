import React, { useState, useEffect } from 'react'
import './MainChat.css'
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import firebase from 'firebase/compat/app';
import { useStateValue } from '../redux/StateProvider';

function MainChat() {
    const [util, setUtil] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        setUtil(`https://avatars.dicebear.com/api/gridy/${Math.random()}.svg`);
    }, [roomId]);

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name))
            
            );
        
            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())))
        }
    }, [roomId]);

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add ({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('');
    }



  return (
    <div className="main_chat">
        <div className='chat_top'>
            <Avatar src={util} />
            <div className='chat_top_details'>
                <h2>{roomName}</h2>
                <p>
                    Last seen{" "}
                    {new Date(
                    messages[messages.length - 1]?.timestamp?.toDate())
                    .toUTCString()
                }</p>
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
            {messages.map(message => (
                <p key={uuidv4()} className={`chat_message ${
                    message.name === user.displayName && "chat_rec"}`}>
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    <span className="chat_time">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
            ))}
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