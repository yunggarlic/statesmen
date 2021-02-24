import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, AppBar, Toolbar, Grid } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button component={RouterLink} to="/">
            <h1>STATESMEN!</h1>
          </Button>
          <Grid>
            <Button size="large" component={RouterLink} to="/map">
              Map
            </Button>
            <Button size="large" component={RouterLink} to="/home">
              Episodes
            </Button>
            <Button size="large" component={RouterLink} to="/about">
              About
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
