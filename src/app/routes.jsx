import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ViewBoardComponent,
  ViewHomeComponent,
  ViewProjectsComponent,
} from './views';

const MainRoutesComponent = () => (
  <Switch>
    <Route exact component={ViewHomeComponent} path="/" />
    <Route exact component={ViewProjectsComponent} path="/projects" />
    <Route exact component={ViewBoardComponent} path="/board/:id?" />
  </Switch>
);

export default MainRoutesComponent;
