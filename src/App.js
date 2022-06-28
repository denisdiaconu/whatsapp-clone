import './App.css';
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeChat from './components/HomeChat';


function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/rooms/:roomId' element={ <MainChat /> } />
            <Route path='/' element= {<HomeChat />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
