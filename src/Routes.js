import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Feed } from './components/Feed';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/test" component={Feed} />
    <Route exact path="/users" component={Feed} />
    <Route path="/users/:id" component={Feed} />
  </Switch>
);
