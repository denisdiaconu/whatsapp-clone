import './App.css';
import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeChat from './components/HomeChat';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
      <div className="app_body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/rooms/:roomId' element={ <MainChat /> } />
            <Route path='/' element= {<HomeChat />} />
          </Routes>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
