
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Start from './pages/Start';
import Sell from './pages/Sell';
import Market from './pages/Market';
import Manage from './pages/Manage';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
       
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/market" element={<Market />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/login" element={<Login />} />

      
      </Routes>
    </div>
  );
}

export default App;
