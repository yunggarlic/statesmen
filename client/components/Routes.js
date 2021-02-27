import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Map, EpisodeList, SingleEpisode } from './index';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem'
  }
}))

const Routes = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Switch>
        <Route exact path="/about"></Route>
        <Route exact path="/map" component={Map} />
        <Route exact path="/episode/:idx">
          <SingleEpisode />
        </Route>
        <Route path="/" component={EpisodeList} />
      </Switch>
    </Container>
  );
};

export default Routes;
