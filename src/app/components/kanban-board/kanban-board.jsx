import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import KanbanBoardColumn from './kanban-board-column';
import { ColumnType, ItemType } from './prop-types';

const useStyles = createUseStyles({
  board: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    width: '100%',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    maxHeight: '100%',
  },
  scrollbox: {
    composes: ['kanban-scrollbar-large'],
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    position: 'relative',
    width: '100%',
  },
  wrapper: {
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
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
