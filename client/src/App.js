import React,{useEffect} from 'react';
import {Route,Routes,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Footer from './components/pages/Footer';
import Dashboard from './components/pages/Dashboard';

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/groups' element={<Dashboard />}/>
        <Route path='/friends' element={<Dashboard />}/>
        <Route path='/settings' element={<Dashboard />}/>
        <Route path='/activity' element={<Dashboard />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
