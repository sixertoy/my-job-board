import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { FortunesType } from '../../../prop-types';

const styles = {
  container: {},
};

const ViewHomeComponent = ({ classes, fortune, loadFortunes }) => {
  useEffect(() => {
    loadFortunes();
  }, [loadFortunes]);
  return (
    <div className={classes.container}>
      <div>Welcome</div>
      {fortune && (
        <React.Fragment>
          <div>{fortune.message}</div>
          <div>{fortune.numbers.join(' | ')}</div>
        </React.Fragment>
      )}
    </div>
  );
};

ViewHomeComponent.defaultProps = {};

ViewHomeComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  fortune: FortunesType.isRequired,
  loadFortunes: PropTypes.func.isRequired,
};

export default withStyles(styles)(ViewHomeComponent);
