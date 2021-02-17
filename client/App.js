import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import { Routes, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
