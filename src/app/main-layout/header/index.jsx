import { withStyles } from '@iziges/napper-react';
import Tippy from '@tippy.js/react';
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import ContextMenus from './context-menus';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.foreground,
    borderBottom: `1px solid ${theme.colors.border}`,
    color: theme.colors.color,
    composes: ['p24', 'flex-0'],
  },
  date: {
    color: theme.colors.disabled,
    composes: ['is-uppercase'],
  },
  menu: {
    '&.active': {
      backgroundColor: '#FFFFFF',
      borderRadius: '0 4px 4px 0',
    },
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    composes: ['p12', 'use-pointer', 'fs14'],
  },
  title: {
    composes: ['is-uppercase', 'is-bold'],
  },
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '4px 0 4px 4px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between', 'items-center'],
  },
});

const AppHeaderComponent = React.memo(({ classes }) => {
  const [tooltipIsVisible, toggleTooltipVisibility] = useState(false);
  const date = moment().format('dddd, DD MMMM YYYY');
  return (
    <div className={classes.container} id="app-header">
      <div className={classes.wrapper}>
        <div>
          <span className={classes.date}>{date}</span>
          <h3 className={classes.title}>BBB</h3>
        </div>
        <div>
          <Tippy
            hideOnClick
            interactive
            arrow={false}
            className={classes.tooltip}
            content={<ContextMenus />}
            interactiveBorder={30}
            placement="left-start"
            theme="light-border"
            trigger="click"
            onHide={() => toggleTooltipVisibility(false)}
            onShow={() => toggleTooltipVisibility(true)}>
            <div
              className={classnames(classes.menu, {
                active: tooltipIsVisible,
              })}>
              <FaPlus />
            </div>
          </Tippy>
        </div>
      </div>
    </div>
  );
});

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
