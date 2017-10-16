/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import './abstractcard.css';
import {
  moveToTrash,
  offerFieldChange } from './../actions';

const AbstractCard = ({
  item,
  minify,
  nostatus,
  movetotrash,
  offerfieldchange
}) => (
  <div className={`abstract-card flex-columns relative ${item.isactive ? 'active' : ''}`}>
    <div className="abstract-card-left-column">
      <p className="abstract-card-date">
        <span>{item.humandate}</span></p>
      <h2 className="abstract-card-title">
        <span>{!minify ? item.title
          : item.shorten.title}
        </span></h2>
      <div dangerouslySetInnerHTML={{
        __html: !minify ? item.description
          : item.shorten.description }} />
    </div>
    {nostatus ? false
      : <div className="abstract-card-right-column">
        {/* flag mail envoye */}
        <button className={`abstract-card-badge ${item.emailsent ? 'active' : ''}`}
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            return offerfieldchange(!item.emailsent, item.id);
          }}>
          <span><i className="myjobboard-mail" /></span>
        </button>
        <span className="splitter" />
        {/* flag calendar */}
        <span className={`abstract-card-badge ${item.contact.trim() ? 'active' : ''}`}>
          <span><i className="myjobboard-user" /></span>
        </span>
        <span className={`abstract-card-badge ${item.event ? 'active' : ''}`}>
          <span><i className="myjobboard-calendar" /></span>
        </span>
        <span className={`abstract-card-badge ${item.comment.trim() ? 'active' : ''}`}>
          <span><i className="myjobboard-comment" /></span>
        </span>
        <span className="splitter" />
        {/* flag commentaire */}
        <button className={'abstract-card-badge'}
          onClick={evt => movetotrash(evt)}>
          <span><i className="myjobboard-box" /></span>
        </button>
      </div>}
  </div>
);

AbstractCard.defaultProps = ({
  minify: false,
  nostatus: false
});

AbstractCard.propTypes = ({
  minify: PropTypes.bool,
  nostatus: PropTypes.bool,
  item: PropTypes.object.isRequired,
  movetotrash: PropTypes.func.isRequired,
  offerfieldchange: PropTypes.func.isRequired
});

export default connect(
  () => ({}),
  (dispatch, props) => ({
    movetotrash: (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      return dispatch(moveToTrash(props.item));
    },
    offerfieldchange: (inputvalue, id) =>
      dispatch(offerFieldChange(inputvalue, id, 'emailsent'))
  })
)(AbstractCard);
