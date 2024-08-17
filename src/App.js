import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearnPage from './components/LearnPage';  // Ensure this path is correct
import TestPage from './game/TestPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/test" element={<TestPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
