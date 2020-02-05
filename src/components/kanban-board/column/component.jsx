import { withStyles } from '@iziges/napper-core-react';
// import find from 'lodash.find';
import PropTypes from 'prop-types';
import React from 'react';
// import { DropTarget } from 'react-dnd';

const styles = theme => ({
  container: () => {
    const backgroundColor = `${theme.colors.white}11`;
    return {
      backgroundColor,
      borderRadius: 5,
      composes: ['m5', 'p12'],
      maxHeight: '100%',
      width: '25%',
    };
  },
  count: {
    composes: ['is-light'],
    fontSize: '0.7em',
  },
  title: () => {
    const color = `${theme.colors.white}66`;
    return {
      color,
      composes: ['is-block', 'is-uppercase', 'fs20', 'is-bold', 'text-center'],
    };
  },
});

// FIXME ->
// pourquoi un obj est egal a null
// const renderBoardCard = (obj, type) =>
//   obj && (
//     <BoardCard
//       key={`kanban-column-item-${obj.id}`}
//       item={obj}
//       // eslint-disable-next-line react/no-array-index-key
//       source={type}
//     />
//   );

const KanbanBoardColumnComponent = ({
  canfilter,
  classes,
  search,
  // connectDropTarget,
  // items,
  showcount,
  title,
}) => {
  const count = 0; // items.length;
  // return connectDropTarget(
  return (
    <div className={classes.container}>
      <h2 className="board-column-header">
        <span className={classes.title}>{title}</span>
        {showcount && <small style={classes.count}>{` (${count})`}</small>}
      </h2>
      {canfilter && (
        <div className="flex-columns" id="searchinput">
          <i className="myjobboard-search" />
          <input
            placeholder="Filter"
            type="text"
            value={search}
            onChange={({ target }) =>
              search === target.value ? false : canfilter(target.value)
            }
          />
        </div>
      )}
      {/* <div
        className="board-column-list fancy-scrollbar"
        style={{ height: 'auto', opacity: isOver ? 0.45 : 1 }}>
        {!items || !items.length
          ? false
          : items.map(obj => renderBoardCard(obj, type))}
      </div> */}
      <div className="board-column-footer" />
    </div>
  );
};

KanbanBoardColumnComponent.defaultProps = {
  canfilter: false,
  search: '',
  showcount: false,
};

KanbanBoardColumnComponent.propTypes = {
  canfilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  classes: PropTypes.shape().isRequired,
  // connectDropTarget: PropTypes.func.isRequired,
  // isOver: PropTypes.bool.isRequired,
  // items: PropTypes.array.isRequired,
  search: PropTypes.string,
  showcount: PropTypes.bool,
  title: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
};

// const dropTargetContext = {
//   canDrop: (props, monitor) => {
//     const { id } = monitor.getItem();
//     const exists = find(props.items, { id });
//     return !exists;
//   },
//   drop: props => ({ target: props.type }),
// };
//
// export default DropTarget(
//   'kanband-board-card',
//   dropTargetContext,
//   (connect, monitor) => ({
//     canDrop: monitor.canDrop(),
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//   })
// )(withStyles(styles)(KanbanBoardColumnComponent));

export default withStyles(styles)(KanbanBoardColumnComponent);
