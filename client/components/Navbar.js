import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Box, AppBar } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar>
      <Box className="navbar">
        <Link component={RouterLink} to="/home">
          <h1>STATESMEN!</h1>
        </Link>
        <span>
          <Link component={RouterLink} to="/home">
            Episodes
          </Link>
          <Link component={RouterLink} to="/about">
            About
          </Link>
        </span>
      </Box>
      </AppBar>
  );
};

export default Navbar;
