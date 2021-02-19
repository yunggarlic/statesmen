import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Routes, Navbar } from './components';
import { Box } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Navbar className="navbar" />
      <Routes />
    </Router>
  );
}

export default App;
