import { withStyles } from '@iziges/napper-react';
import Tippy from '@tippy.js/react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { TwitterPicker } from 'react-color';
// import { FaTrash } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';
import { Link } from 'react-router-dom';

const styles = {
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
    composes: ['fs18', 'is-bold', 'is-block', 'text-center'],
  },
  tooltip: {
    composes: ['fs9'],
  },
};

const renderOptions = (onDelete, classes) => {
  return (
    <div className={classes.tooltip}>
      <button type="button" onClick={onDelete}>
        <span>Supp.</span>
      </button>
    </div>
  );
};

const ProjectCardComponent = ({ classes, data, onDelete, pathname }) => {
  const [tooltipIsVisible, toggleTooltipVisibility] = useState(false);
  return (
    <div className={classes.container} data-id={`project-${data.id}`}>
      <div className={classes.options}>
        <Tippy
          arrow
          hideOnClick
          interactive
          className={classes.tooltip}
          content={renderOptions(onDelete(data.id), classes)}
          interactiveBorder={30}
          placement="left-start"
          theme="light-border"
          trigger="click"
          onHide={() => toggleTooltipVisibility(false)}
          onShow={() => toggleTooltipVisibility(true)}>
          <div
            className={classnames(classes.menu, { active: tooltipIsVisible })}>
            <MdMoreVert />
          </div>
        </Tippy>
      </div>
      {/* <div className={classes.theme}>
        <TwitterPicker />
      </div> */}
      <div className={classes.inner} style={{ backgroundColor: data.color }}>
        <Link className={classes.title} to={`${pathname}/${data.id}/`}>
          <span>{data.title}</span>
        </Link>
      </div>
    </div>
  );
};

ProjectCardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    color: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectCardComponent);
