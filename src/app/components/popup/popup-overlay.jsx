import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    position: 'relative',
    width: '100%',
  },
};

const PopupOverlay = React.memo(({ classes }) => (
  <div className={classes.overlay} />
));

PopupOverlay.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(PopupOverlay);
