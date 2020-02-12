import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Redirect } from 'react-router-dom';

import { NoteType } from '../../../../prop-types';
import NotesGridComponent from '../grid';

const styles = {
  columnLeft: {
    width: '40%',
  },
  columnRight: {
    width: '60%',
  },
  container: {
    composes: ['is-full-layout', 'flex-columns'],
  },
};

const PrevienwNoteComponent = ({ classes, note }) => {
  if (!note) return <Redirect to="/notes" />;
  return (
    <div className={classes.container}>
      <div className={classes.columnLeft}>
        <NotesGridComponent />
      </div>
      <div className={classes.columnRight}>
        <ReactMarkdown source={note.content} />
      </div>
    </div>
  );
};

PrevienwNoteComponent.defaultProps = {
  note: null,
};

PrevienwNoteComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  note: NoteType,
};

export default withStyles(styles)(PrevienwNoteComponent);
