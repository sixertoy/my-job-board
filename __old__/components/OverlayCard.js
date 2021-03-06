// application
import './overlaycard.css';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { closeOverlayCard, offerFieldChange } from '../actions';
import AbstractCard from './AbstractCard';

const OverlayCard = ({ closoverlay, item, offerfieldchange }) => (
  <div className={`${item ? '' : 'hidden'}`} id="overlaycard">
    <button className="overlaycard-close" onClick={closoverlay}>
      <i className="myjobboard-cancel" />
    </button>
    <div
      className="overlayback overlaycard-scroller"
      role="button"
      tabIndex="0"
      onClick={closoverlay}>
      <div
        className="cardcontainer relative"
        role="button"
        tabIndex="0"
        onClick={evt => evt.stopPropagation()}>
        <div
          className="overlaycard-header flex-columns"
          style={{ justifyContent: 'flex-end' }}>
          <p>
            <span className="itemsource">{`Source: ${item.source}`}</span>
          </p>
          <p>
            <a className="visitlink" href={item.link} target="blank">
              <span>
                <i className="myjobboard-export" />
              </span>
            </a>
          </p>
        </div>
        <div className="overlaycard-content">
          <AbstractCard nostatus item={item} />
        </div>
        <div className="overlaycard-footer form">
          <p>
            <label htmlFor="joboffer-contact">
              <span>
                <i className="myjobboard-user" />
                <span>Contact</span>
              </span>
              <input
                defaultValue={item.contact}
                id="joboffer-contact"
                onChange={({ target }) =>
                  item.contact === target.value
                    ? false
                    : offerfieldchange(target.value, item.id, 'contact')
                }
              />
            </label>
          </p>
          <p>
            <label htmlFor="joboffer-comment">
              <span>
                <i className="myjobboard-comment" />
                <span>Comment</span>
              </span>
              <textarea
                defaultValue={item.comment}
                id="joboffer-comment"
                rows="10"
                onChange={({ target }) =>
                  item.comment === target.value
                    ? false
                    : offerfieldchange(target.value, item.id, 'comment')
                }
              />
            </label>
          </p>
        </div>
      </div>
    </div>
  </div>
);

OverlayCard.propTypes = {
  closoverlay: PropTypes.func.isRequired,
  item: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  offerfieldchange: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    item: state.openedcard,
  }),
  dispatch => ({
    closoverlay: () => dispatch(closeOverlayCard()),
    offerfieldchange: (value, id, fieldname) =>
      dispatch(offerFieldChange(value, id, fieldname)),
  })
)(OverlayCard);
