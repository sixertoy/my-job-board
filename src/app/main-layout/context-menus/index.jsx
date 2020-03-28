import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BoardContextMenuComponent from './board';
import ProjectsContextMenuComponent from './projects';

const LayoutHeaderContextMenu = React.memo(() => (
  <Switch>
    <Route exact component={BoardContextMenuComponent} path="/board:id?" />
    <Route
      exact
      component={ProjectsContextMenuComponent}
      path="/projects:id?"
    />
  </Switch>
));

export default LayoutHeaderContextMenu;
