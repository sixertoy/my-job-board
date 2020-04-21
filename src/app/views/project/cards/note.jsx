import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  container: {
    composes: ['is-relative'],
    height: 130,
    margin: '1%',
    maxWidth: 280,
    minWidth: 165,
    width: '23%',
  },
  inner: {
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['is-full-height', 'flex-rows', 'flex-center'],
  },
  menu: {
    color: 'rgba(255, 255, 255, 0.45)',
  },
  options: {
    composes: ['is-absolute'],
    right: 10,
    top: 10,
  },
  theme: {
    bottom: 10,
    composes: ['is-absolute'],
    right: 10,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.45)',
    composes: [
      'fs18',
      'is-bold',
      'flex-columns',
      'flex-center',
      'items-center',
    ],
  },
  tooltip: {
    composes: ['fs9'],
  },
});

const NoteCardComponent = ({ item }) => {
  const classes = useStyles();
  const pathname = '';
  return (
    <div className={classes.inner}>
      <Link className={classes.title} to={`${pathname}/${item.id}/`}>
        <span>{item.title}</span>
      </Link>
    </div>
  );
};

NoteCardComponent.defaultProps = {};

NoteCardComponent.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default NoteCardComponent;
