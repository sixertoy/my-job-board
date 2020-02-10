import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const styles = {
  container: {
    composes: ['p12'],
    maxWidth: 240,
    minWidth: 240,
    width: 240,
  },
  delete: {
    composes: ['fs11'],
  },
  source: {
    composes: ['flex-columns', 'flex-between'],
  },
  title: {
    composes: ['mb12', 'is-bold'],
  },
};

const BoardContextMenuComponent = ({ classes, feeds }) => (
  <div className={classes.container}>
    <div>
      <div className={classes.title}>Flux RSS &amp; Services</div>
      {Object.keys(feeds).map(key => {
        return (
          <div key={key} className={classes.source}>
            <span className={classes.label}>{key}</span>
            <button className={classes.delete} type="button" onClick={() => {}}>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  </div>
);

BoardContextMenuComponent.defaultProps = {};

BoardContextMenuComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  feeds: PropTypes.shape().isRequired,
};

export default withStyles(styles)(BoardContextMenuComponent);
