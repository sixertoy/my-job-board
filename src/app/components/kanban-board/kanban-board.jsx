import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import KanbanBoardColumn from './kanban-board-column';
import { ColumnType, ItemType } from './prop-types';
import { stylesheet } from './styles';

const useStyles = createUseStyles({
  board: {
    ...stylesheet.isFullWidth,
    ...stylesheet.isFullHeight,
  },
  columns: {
    ...stylesheet.isFullHeight,
    display: 'flex',
    flexDirection: 'row',
  },
  scrollbox: {
    ...stylesheet.isFullWidth,
    ...stylesheet.isFullHeight,
    ...stylesheet.isScrollableX,
    ...stylesheet.customScrollbar(12),
    position: 'relative',
  },
  wrapper: {
    ...stylesheet.isFullHeight,
    padding: '12px 7px',
    position: 'absolute',
  },
});

const KanbanBoardComponent = ({ columns, items }) => {
  const classes = useStyles();
  return (
    <div className={classes.board}>
      <div className={classes.scrollbox}>
        <div className={classes.wrapper}>
          <div className={classes.columns}>
            {columns.map(({ key, label }) => {
              return (
                <KanbanBoardColumn
                  key={key}
                  addCardHandler={() => {}}
                  items={items}
                  label={label}
                  status={key}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

KanbanBoardComponent.propTypes = {
  columns: PropTypes.arrayOf(ColumnType).isRequired,
  items: PropTypes.arrayOf(ItemType).isRequired,
};

// export default DragDropContext(HTML5Backend)(
export default KanbanBoardComponent;
