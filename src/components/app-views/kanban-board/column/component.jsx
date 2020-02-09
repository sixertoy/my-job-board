import { withStyles } from '@iziges/napper-core-react';
// import find from 'lodash.find';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// import { DropTarget } from 'react-dnd';
//
import KanbanBoardCardComponent from '../card';

const styles = theme => ({
  button: {
    composes: ['text-left', 'is-block', 'is-full-width'],
    whiteSpace: 'normal',
  },
  container: {
    composes: ['m5', 'p12'],
    maxHeight: '100%',
    minWidth: 300,
    width: '25%',
  },
  count: {
    composes: ['fs11', 'is-italic'],
  },
  header: ({ theme: name }) => {
    const color = `${theme.colors[name].color}66`;
    return {
      color,
      composes: ['mb12', 'text-center'],
    };
  },
  list: {
    composes: ['pr7', 'is-scrollbox-y', 'fancy-scrollbar'],
  },
  title: {
    composes: ['is-uppercase', 'fs14', 'is-bold'],
  },
  wrapper: {
    composes: ['is-scrollbox-wrapper', 'is-full-height'],
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
  // canfilter,
  classes,
  offers,
  // search,
  // connectDropTarget,
  // items,
  title,
}) => {
  const count = offers.length || 0;
  // return connectDropTarget(
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>
        <span className={classes.title}>{title}</span>
        <sup className={classes.count}>&nbsp;{`(${count})`}</sup>
      </h2>
      {/* {canfilter && (
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
      )} */}
      <div className={classes.wrapper}>
        <div className={classes.list}>
          {offers.map(item => (
            <Link
              key={item.id}
              className={classes.button}
              to={`/board/${item.id}`}>
              <KanbanBoardCardComponent offer={item} />
            </Link>
          ))}
        </div>
      </div>
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
  // canfilter: false,
  // search: '',
};

KanbanBoardColumnComponent.propTypes = {
  // canfilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  classes: PropTypes.shape().isRequired,
  // connectDropTarget: PropTypes.func.isRequired,
  // isOver: PropTypes.bool.isRequired,
  // NOTE créer un type pour les offres
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // search: PropTypes.string,
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
