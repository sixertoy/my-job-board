import PropTypes from 'prop-types';
import React from 'react';
import { jss, JssProvider } from 'react-jss';

import KanbanBoardComponent from './kanban-board';

const { NODE_ENV } = process.env;
const CLASS_NAME_PREFIX = 'napper-kanbanboard-';
const MINIFY = Boolean(NODE_ENV !== 'development' && NODE_ENV !== 'local');

const KanbanBoard = props => {
  const { jssMinifyId, ...rest } = props;
  const minify = jssMinifyId || MINIFY;
  return (
    <JssProvider classNamePrefix={CLASS_NAME_PREFIX} id={{ minify }} jss={jss}>
      <KanbanBoardComponent {...rest} />
    </JssProvider>
  );
};

KanbanBoard.defaultProps = {
  jssMinifyId: false,
};

KanbanBoard.propTypes = {
  jssMinifyId: PropTypes.bool,
};

export default KanbanBoard;
