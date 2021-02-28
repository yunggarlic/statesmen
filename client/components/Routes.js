import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Map, EpisodeList, SingleEpisode, Footer, About } from './index';
import { Container, makeStyles, Zoom } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
}));

const Routes = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/episode/:idx">
          <SingleEpisode />
        </Route>
        <Route path="/">
          <EpisodeList />
          <Footer className={classes.footer} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
