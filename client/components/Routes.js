import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Map, EpisodeList } from './index';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about"></Route>
      <Route exact path="/map" component={Map} />
      <Route path="/" component={EpisodeList} />
    </Switch>
  );
};

export default Routes;