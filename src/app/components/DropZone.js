import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

const target = ({});

function collect (connect, monitor) {
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget()
  };
}

class DropZone extends Component {
  render () {
    const {
      isOver,
      connectDropTarget } = this.props;
    console.log('isover', isOver)
    return connectDropTarget(
      <div style={{ height: '200px' }}>
        You can drop here!
      </div>
    );
  }
}

export default DropTarget('dropzone', target, collect)(DropZone);
