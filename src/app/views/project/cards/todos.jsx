import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link, withRouter } from 'react-router-dom';

const useStyles = createUseStyles({
  inner: {
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['is-full-height', 'flex-rows', 'flex-center'],
    height: 160,
    margin: '1%',
    maxWidth: '18%',
    minWidth: '18%',
    width: '18%',
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
});

const TodosCardComponent = ({ item, match: { params } }) => {
  const classes = useStyles();
  const pathname = `projects/${params.id}`;
  return (
    <div className={classes.inner} style={{ backgroundColor: '#000' }}>
      <Link className={classes.title} to={`${pathname}/todos/${item.id}/`}>
        <span>{item.title}</span>
      </Link>
    </div>
  );
};

TodosCardComponent.defaultProps = {};

TodosCardComponent.propTypes = {
  item: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
};

export default withRouter(TodosCardComponent);
