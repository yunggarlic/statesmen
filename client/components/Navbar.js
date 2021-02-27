import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, AppBar, Toolbar, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#9AC4E6',
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
            {/* <Typography variant="h4" component="h1" className={classes.typography}>Statesmen!</Typography> */}
          </Button>
          {/* <Grid>
            <Button size="large" component={RouterLink} to="/map">
              <Typography className={classes.typography}>Map</Typography>
            </Button>
            <Button size="large" component={RouterLink} to="/home">
            <Typography className={classes.typography}>Episodes</Typography>
            </Button>
            <Button size="large" component={RouterLink} to="/about">
            <Typography className={classes.typography}>About</Typography>
            </Button>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
