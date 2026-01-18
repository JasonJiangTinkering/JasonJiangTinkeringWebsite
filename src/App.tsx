import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WonderBrink from './pages/WonderBrink';
import ComputerApplications from './pages/ComputerApplications';
import DroneClass from './pages/DroneClass';
import './App.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <nav className={`main-nav`}>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/wonderbrink" className="nav-link">WonderBrink @ Buffalo</Link>
      <Link to="/computer-applications" className="nav-link">Computer Applications</Link>
      <Link to="/drone-class" className="nav-link">Drone Class</Link>
      <Link to="/login" className="nav-link">Student / Parent / Admin Login</Link>
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
            <Route path="/drone-class" element={<DroneClass />} />
            <Route path="/wonderbrink" element={<WonderBrink />} />
            <Route path="/computer-applications" element={<ComputerApplications />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App; 