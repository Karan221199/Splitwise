import {Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Footer from './components/pages/Footer';
import Main from './components/pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>4
        <Route path='/home' element={<Main />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
