
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Start from './pages/Start';
import Sell from './pages/Sell';
import Market from './pages/Market';
import Manage from './pages/Manage';
import Login from './pages/Login';
import Cart from './pages/Cart';
import MensData from './pages/MensData';
import { AuthPrivate } from './Hoc/AuthPrivate';


function App() {
  return (
    <div className="App">
       
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<AuthPrivate><Start /></AuthPrivate> } />
        <Route path="/sell" element={<AuthPrivate><Sell /></AuthPrivate> } />
        <Route path="/market" element={ <AuthPrivate><Market /></AuthPrivate> } />
        <Route path="/manage" element={<AuthPrivate><Manage /></AuthPrivate> } />
        {/* <Route path="/cart" element={ <AuthPrivate><Cart /></AuthPrivate> } /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/manage/:id" element={<AuthPrivate><MensData /></AuthPrivate> } />
        <Route path="/manage/:id/:id" element={<AuthPrivate><Cart /></AuthPrivate> } />
        

      
      </Routes>
    </div>
  );
}

export default App;
