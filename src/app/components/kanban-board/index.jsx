import './scrollbar.css';

import PropTypes from 'prop-types';
import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { jss, JssProvider, ThemeProvider } from 'react-jss';

import { BASE_THEME, CLASS_NAME_PREFIX, MINIFY } from './constants';
import KanbanBoardComponent from './kanban-board';
import { ThemeType } from './prop-types';

const KanbanBoard = props => {
  const { jssMinifyId, theme, ...rest } = props;
  const minify = jssMinifyId || MINIFY;
  const mergedTheme = { ...BASE_THEME, ...theme };
  return (
    <JssProvider classNamePrefix={CLASS_NAME_PREFIX} id={{ minify }} jss={jss}>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={mergedTheme}>
          <KanbanBoardComponent {...rest} />
        </ThemeProvider>
      </DndProvider>
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
