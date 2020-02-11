import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

// import { DragSource } from 'react-dnd';
// import { getEmptyImage } from 'react-dnd-html5-backend';
// import { connect } from 'react-redux';
import KanbanBoardAbstractCard from './abstract-card';

const styles = {
  container: {
    composes: ['mb12'],
  },
};

class KanbanBoardCardComponent extends React.PureComponent {
  // componentDidMount() {
  //   if (this.props.connectDragPreview) {
  //     // remove HTML5 image lors du drag d'un item
  //     const opts = { captureDraggingState: true };
  //     this.props.connectDragPreview(getEmptyImage(), opts);
  //   }
  // }

  render() {
    const {
      // connectDragSource,
      // isDragging,
      classes,
      offer,
      // showfullcard,
      // source,
    } = this.props;
    return (
      <div className={classes.container}>
        <KanbanBoardAbstractCard item={offer} />
      </div>
    );
  }
}

KanbanBoardCardComponent.propTypes = {
  // connectDragPreview: PropTypes.func.isRequired,
  // connectDragSource: PropTypes.func.isRequired,
  // isDragging: PropTypes.bool.isRequired,
  classes: PropTypes.shape().isRequired,
  offer: PropTypes.shape().isRequired,
  // showfullcard: PropTypes.func.isRequired,
  // source: PropTypes.string.isRequired,
};

export default withStyles(styles)(KanbanBoardCardComponent);

// describes how the drag source reacts to the drag and drop events
// const dragTargetContext = {
//   beginDrag: props => {
//     props.startdragging();
//     // object retourné pour utilisé avec monitor.getItem()
//     return { ...props.item };
//   },
//   endDrag: (props, monitor) => {
//     props.enddragging();
//     if (!monitor.didDrop()) return;
//     const { target } = monitor.getDropResult();
//     // FIXME ->
//     props.addcardto(target);
//   },
//   isDragging: (props, monitor) =>
//     // check si cet element et l'element en court de drag
//     props.item.id === monitor.getItem().id,
// };
//
// export default DragSource('board-card', dragTargetContext, (conn, monitor) => ({
//   connectDragPreview: conn.dragPreview(),
//   connectDragSource: conn.dragSource(),
//   isDragging: monitor.isDragging(),
// }))(KanbanBoardCardComponent);
