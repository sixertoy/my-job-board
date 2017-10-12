import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import './overlaycard.css';
import AbstractCard from './AbstractCard';
import { closeOverlayCard } from './../actions';

const OverlayCard = ({
  item,
  closoverlay
}) => (
  <div id="overlaycard" className={`${item ? '' : 'hidden'}`}>
    <div className="overlayback" role="button" tabIndex="0"
      onClick={closoverlay} />
    <button className="overlaycard-close"
      onClick={closoverlay}>
      <i className="myjobboard-cancel" /></button>
    <div className="cardcontainer relative">
      <AbstractCard item={item} />
      <a target="blank" href={item.link}>
        <span>{'Aller vers le site de l\'annonce'}</span>
      </a>
    </div>
  </div>
);

OverlayCard.propTypes = {
  closoverlay: PropTypes.func.isRequired,
  item: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired
};

export default connect(
  state => ({
    item: state.openedcard
  }),
  dispatch => ({
    closoverlay: () => dispatch(closeOverlayCard())
  })
)(OverlayCard);
