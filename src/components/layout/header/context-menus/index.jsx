import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BoardContextMenuComponent from './board';

const LayoutHeaderContextMenu = React.memo(() => (
  <Switch>
    <Route exact component={BoardContextMenuComponent} path="/board:id?" />
  </Switch>
));

export default LayoutHeaderContextMenu;
