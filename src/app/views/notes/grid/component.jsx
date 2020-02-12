import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { NotesType } from '../../../../prop-types';

const styles = {
  grid: {
    composes: ['flex-columns', 'flex-wrap'],
  },
  item: {
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['p12', 'is-full-layout'],
  },
  link: {
    composes: ['is-block', 'is-full-layout'],
  },
  wrapper: {
    height: 160,
    margin: '1%',
    minWidth: 200,
    width: '23%',
  },
};

const NotesGridComponent = ({ classes, notes }) => (
  <div className={classes.grid}>
    {notes.map(({ id, title }) => {
      return (
        <div key={id} className={classes.wrapper}>
          <div className={classes.item}>
            <Link className={classes.link} to={`/notes/${id}`}>
              <span>{title}</span>
              <IoIosMore />
            </Link>
          </div>
        </div>
      );
    })}
  </div>
);

NotesGridComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  notes: NotesType.isRequired,
};

export default withStyles(styles)(NotesGridComponent);
