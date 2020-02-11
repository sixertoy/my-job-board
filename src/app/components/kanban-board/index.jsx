import './scrollbar.css';

import PropTypes from 'prop-types';
import React from 'react';
import { jss, JssProvider, ThemeProvider } from 'react-jss';

import KanbanBoardComponent from './kanban-board';
import { ThemeType } from './prop-types';

const { NODE_ENV } = process.env;
const CLASS_NAME_PREFIX = 'napper-kanbanboard-';
const MINIFY = Boolean(NODE_ENV !== 'development' && NODE_ENV !== 'local');

export const BASE_THEME = {
  buttonColor: '#5E6C84',
  buttonHover: '#DCDEE4',
  cardBackground: '#FFFFFF',
  cardColor: '#172B4D',
  columnBackground: '#EBECF0',
  columnColor: '#172B4D',
};

const KanbanBoard = props => {
  const { jssMinifyId, theme, ...rest } = props;
  const minify = jssMinifyId || MINIFY;
  const mergedTheme = { ...BASE_THEME, ...theme };
  return (
    <JssProvider classNamePrefix={CLASS_NAME_PREFIX} id={{ minify }} jss={jss}>
      <ThemeProvider theme={mergedTheme}>
        <KanbanBoardComponent {...rest} />
      </ThemeProvider>
    </JssProvider>
  );
};

KanbanBoard.defaultProps = {
  jssMinifyId: false,
  theme: {},
};

KanbanBoard.propTypes = {
  jssMinifyId: PropTypes.bool,
  theme: ThemeType,
};

export default KanbanBoard;
