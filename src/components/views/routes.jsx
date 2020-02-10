import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ViewHomeComponent, ViewKanbanBoardComponent } from '../views';

const MainRoutesComponent = () => (
  <Switch>
    <Route exact component={ViewHomeComponent} path="/" />
    <Route exact component={ViewKanbanBoardComponent} path="/board/:id?" />
  </Switch>
);

export default MainRoutesComponent;
