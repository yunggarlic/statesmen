import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Routes, Navbar, Footer } from './components';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

function App() {
  const classes = useStyles;
  return (
    <Router>
      <Container
        className={classes.root}
        maxWidth={false}
        disableGutters={true}
      >
        <Navbar />
        <Routes />
        {/* <Footer /> */}
      </Container>
    </Router>
  );
}

export default App;
