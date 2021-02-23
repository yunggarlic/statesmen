import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Routes, Navbar } from './components';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function App() {
  return (
    <Router>
      <Navbar className="navbar" />
      <Routes />
      <BottomNavigation
      showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} to="/" />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} to="/"/>
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} to="/"/>
      </BottomNavigation>
    </Router>
  );
}

export default App;
