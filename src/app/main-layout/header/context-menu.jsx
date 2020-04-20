import Tippy from '@tippy.js/react';
import classnames from 'classnames';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import routes from '../../../routes';

const useStyles = createUseStyles({
  menu: {
    '&.active': {
      backgroundColor: '#FFFFFF',
      borderRadius: '0 4px 4px 0',
    },
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    composes: ['p12', 'use-pointer', 'fs14'],
  },
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '4px 0 4px 4px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
  },
});

const renderTooltip = (classes, Component, toggle, active) => () => {
  return (
    <div>
      <Tippy
        hideOnClick
        interactive
        arrow={false}
        className={classes.tooltip}
        content={<Component />}
        interactiveBorder={30}
        placement="left-start"
        theme="light-border"
        trigger="click"
        onHide={() => toggle(false)}
        onShow={() => toggle(true)}>
        <div className={classnames(classes.menu, { active })}>
          <FaPlus />
        </div>
      </Tippy>
    </div>
  );
};

const LayoutHeaderContextMenu = React.memo(() => {
  const classes = useStyles();
  const [tooltipIsVisible, toggleTooltipVisibility] = useState(false);
  return (
    <Switch>
      {routes
        .filter(obj => obj.contextmenu)
        .map(obj => {
          const Component = obj.contextmenu;
          const path = `${obj.basepath}${obj.params}`;
          return (
            <Route
              key={obj.basepath}
              exact
              path={path}
              render={renderTooltip(
                classes,
                Component,
                toggleTooltipVisibility,
                tooltipIsVisible
              )}
            />
          );
        })}
    </Switch>
  );
});

LayoutHeaderContextMenu.propTypes = {};

export default LayoutHeaderContextMenu;
