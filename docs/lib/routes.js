/**
 * Created by bangvu on 4/4/17.
 */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import UI from './UI/index'
import Notification from './Components/Notification';
import Grid from './Components/Grid';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="/components">
      <IndexRedirect to="alert" />
      <Route path="notification" component={Notification}/>
      <Route path="grid" component={Grid}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
