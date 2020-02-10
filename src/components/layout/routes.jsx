import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ViewHomeComponent,
  ViewKanbanBoardComponent,
  ViewSettingsComponent,
} from '../views';

const MainRoutesComponent = () => (
  <Switch>
    <Route exact component={ViewHomeComponent} path="/" />
    <Route exact component={ViewKanbanBoardComponent} path="/board/:id?" />
    <Route exact component={ViewSettingsComponent} path="/settings" />
  </Switch>
);

export default MainRoutesComponent;
