import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import './overlaycard.css';
import AbstractCard from './ui/AbstractCard';
import { closeOverlayCard } from './../actions';

const OverlayCard = ({
  item,
  lastupdate,
  closoverlay
}) => (
  <div id="overlaycard" className={`${item ? '' : 'hidden'}`}>
    <div className="overlayback" role="button" tabIndex="0"
      onClick={closoverlay} />
    <button className="overlaycard-close"
      onClick={closoverlay}>
      <i className="myjobboard-cancel" /></button>
    <div className="cardcontainer relative">
      <AbstractCard item={item} lastupdate={lastupdate} />
      <a target="blank" href={item.link}>
        <span>{'Aller vers le site de l\'annonce'}</span>
      </a>
    </div>
  </div>
);

OverlayCard.propTypes = {
  closoverlay: PropTypes.func.isRequired,
  lastupdate: PropTypes.number.isRequired,
  item: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired
};

export default connect(
  state => ({
    item: state.openedcard,
    lastupdate: state.lastupdate
  }),
  dispatch => ({
    closoverlay: () => dispatch(closeOverlayCard())
  })
)(OverlayCard);
