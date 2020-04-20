import { slugify } from '@nappr/nappr-core/lib/strings';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import ContextMenu from './context-menu';

const useStyles = createUseStyles(theme => ({
  breadcrumbs: {
    '& *::before': { content: '|', margin: '0 10px' },
  },
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
  title: {
    composes: ['is-uppercase', 'is-bold'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-between', 'items-center'],
    height: 40,
  },
}));

function renderBoldBreadcrumb(value) {
  const key = slugify(value);
  return (
    <b key={key}>
      <span>{value}</span>
    </b>
  );
}

function renderLinkBreadcrumb(value, link) {
  const key = slugify(value);
  return (
    <a key={key} href={link}>
      <span>{value}</span>
    </a>
  );
}

const createBreadcrumb = length => (value, index) => {
  const link = '';
  const isLastElement = index + 1 >= length;
  const renderer = !isLastElement ? renderBoldBreadcrumb : renderLinkBreadcrumb;
  return renderer(value[0], link);
};

const AppHeaderComponent = React.memo(({ breadcrumb }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const breadcrumbLength = breadcrumb.length;
  const date = moment().format('dddd, DD MMMM YYYY');
  return (
    <div className={classes.container} id="app-header">
      <div className={classes.wrapper}>
        <div>
          <span className={classes.date}>{date}</span>
          <div className={classes.breadcrumbs}>
            {breadcrumb.map(createBreadcrumb(breadcrumbLength))}
          </div>
        </div>
        <ContextMenu />
      </div>
    </div>
  );
});

AppHeaderComponent.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default AppHeaderComponent;
