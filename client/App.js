import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Routes, Navbar, Footer } from './components';
import { Container, makeStyles } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Container
        maxWidth={false}
        disableGutters={true}
      >
        <Navbar />
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
