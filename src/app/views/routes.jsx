import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ViewBoardComponent, ViewHomeComponent } from '.';

const MainRoutesComponent = () => (
  <Switch>
    <Route exact component={ViewHomeComponent} path="/" />
    <Route exact component={ViewBoardComponent} path="/board/:id?" />
  </Switch>
);

export default MainRoutesComponent;
