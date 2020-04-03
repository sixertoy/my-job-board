import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import PopupCloseIcon from './popup-close-icon';
import PopupOverlay from './popup-overlay';

const styles = {
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  container: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 900000,
  },
  inner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    height: 165,
    padding: 24,
    position: 'relative',
    width: 320,
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
};

const PopupComponent = ({
  children,
  classes,
  component,
  render,
  style,
  visible,
}) => {
  const [isVisible, toggleVisibility] = useState(visible);
  if (!isVisible) return null;
  return (
    <div className={classes.container}>
      <PopupOverlay />
      <div className={classes.wrapper}>
        <div className={classes.inner} style={{ ...style }}>
          <button
            className={classes.closeButton}
            type="button"
            onClick={() => toggleVisibility(!isVisible)}>
            <PopupCloseIcon />
          </button>
          {component || (render && render()) || children || null}
        </div>
      </div>
    </div>
  );
};

PopupComponent.defaultProps = {
  children: null,
  component: null,
  render: null,
  style: {},
  visible: false,
};

PopupComponent.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.shape().isRequired,
  component: PropTypes.node,
  render: PropTypes.func,
  style: PropTypes.shape(),
  visible: PropTypes.bool,
};

export default withStyles(styles)(PopupComponent);
