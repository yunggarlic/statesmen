import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Map, EpisodeList, SingleEpisode } from './index';
import { Container } from '@material-ui/core';

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/about"></Route>
        <Route exact path="/map" component={Map} />
        <Route exact path="/:id">
          <SingleEpisode />
        </Route>
        <Route path="/" component={EpisodeList} />
      </Switch>
    </Container>
  );
};

export default Routes;
