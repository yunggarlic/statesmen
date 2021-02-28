import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, AppBar, Toolbar, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#9AC4E6',
    width: '100vw'
  },
  toolbar: {
    height: "3rem",
  },
  typography: {
    color: "#2f2f2f"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button component={RouterLink} to="/">
            <img src='StatesmenPodcastHandwritten.png' width="300"></img>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
