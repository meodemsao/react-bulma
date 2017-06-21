/**
 * Created by bangvu on 4/4/17.
 */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import UI from './UI/index';

import BoxPage from './Components/BoxPage';
import NotificationPage from './Components/NotificationPage';
import ButtonPage from './Components/ButtonPage';
import ColsPage from './Components/ColsPage';
import ContentPage from './Components/ContentPage';
import DeletePage from './Components/DeletePage';
import LevelPage from './Components/LevelPage';
import MessagePage from './Components/MessagePage';
import IconPage from './Components/IconPage';
import TilesPage from './Components/TilesPage';
import ImagePage from './Components/ImagePage';
import ProgressPage from './Components/ProgressPage';
import TagPage from './Components/TagPage';
import TitlePage from './Components/TitlePage';
import CardPage from './Components/CardPage';
import MediaPage from './Components/MediaPage';
import MenuPage from './Components/MenuPage';
import ModalPage from './Components/ModalPage';
import FormPage from './Components/FormPage';
import NavPage from './Components/NavPage';
import PaginationPage from './Components/PaginationPage';
import PanelPage from './Components/PanelPage';
import TabPage from './Components/TabPage';
import ContainerPage from './Components/ContainerPage';
import HeroPage from './Components/HeroPage';
import SectionPage from './Components/SectionPage';
import FooterPage from './Components/FooterPage';

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
      <Route path="icon" component={IconPage} />
      <Route path="tiles" component={TilesPage} />
      <Route path="image" component={ImagePage} />
      <Route path="progress" component={ProgressPage} />
      <Route path="tag" component={TagPage} />
      <Route path="title" component={TitlePage} />
      <Route path="card" component={CardPage} />
      <Route path="mediaObject" component={MediaPage} />
      <Route path="menu" component={MenuPage} />
      <Route path="modal" component={ModalPage} />
      <Route path="form" component={FormPage} />
      <Route path="nav" component={NavPage} />
      <Route path="pagination" component={PaginationPage} />
      <Route path="panel" component={PanelPage} />
      <Route path="tabs" component={TabPage} />
      <Route path="container" component={ContainerPage} />
      <Route path="hero" component={HeroPage} />
      <Route path="section" component={SectionPage} />
      <Route path="footer" component={FooterPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
