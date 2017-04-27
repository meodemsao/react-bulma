/**
 * Created by bangvu on 4/4/17.
 */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import UI from './UI/index'

import Box from './Components/BoxPage';
import Notification from './Components/NotificationPage';
import Button from './Components/ButtonPage';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="/components">
      <IndexRedirect to="box" />
      <Route path="box" component={Box}/>
      <Route path="notification" component={Notification}/>
      <Route path="button" component={Button}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
