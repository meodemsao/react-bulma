/**
 * Created by bangvu on 4/4/17.
 */
import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import UI from './UI/index'

import BoxPage from './Components/BoxPage';
import NotificationPage from './Components/NotificationPage';
import ButtonPage from './Components/ButtonPage';
import ColsPage from './Components/ColsPage';
import ContentPage from  './Components/ContentPage';
import DeletePage from './Components/DeletePage';
import LevelPage from './Components/LevelPage';
import MessagePage from './Components/MessagePage';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="/components">
      <IndexRedirect to="box" />
      <Route path="box" component={BoxPage} />
      <Route path="notification" component={NotificationPage} />
      <Route path="button" component={ButtonPage} />
      <Route path="columns" component={ColsPage} />
      <Route path="content" component={ContentPage} />
      <Route path="delete" component={DeletePage} />
      <Route path="message" component={MessagePage} />
      <Route path="level" component={LevelPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
