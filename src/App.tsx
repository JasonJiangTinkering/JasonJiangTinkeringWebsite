import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreativeMorning from './pages/CreativeMorning';
import './App.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <nav className={`main-nav`}>
      <Link to="/" className="nav-link">DRONE Class</Link>
      <Link to="/creative-morning" className="nav-link">CreativeMorning @ Buffalo</Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/creative-morning" element={<CreativeMorning />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App; 