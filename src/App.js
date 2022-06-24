import './App.css';
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <MainChat />
      </div>
    </div>
  );
}

export default App;
