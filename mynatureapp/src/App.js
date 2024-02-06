// import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/commonComponents/nav'
import Sidebar from './components/commonComponents/sidebar';
import Footer from './components/commonComponents/footer';
// import Sapling from '../src/assets/nature/Sapling.png'
import Home from './components/commonComponents/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Bonsai from './components/bonsai';

function App() {
  return (

    <div className="grid-container">
      <Nav />
      <Sidebar />
      <div className="item3" >
        <Router>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Home />} />
            <Route path="/Bonsai" element={<Bonsai />} />
          </Routes>
        </Router>

      </div>
      <Footer />
    </div>



  );
}

export default App;
