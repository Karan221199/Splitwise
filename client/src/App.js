import {Route,Routes} from 'react-router-dom';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
