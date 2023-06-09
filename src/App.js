import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import LogGains from './components/loggains/LogGains';
import Inspiration from './components/inspiration/Inspiration';
import Watch from './components/watch/Watch';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <h5>Workout Warrior</h5>
        <h6>Log workouts & be inspired</h6>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/loggains" element={<LogGains />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
