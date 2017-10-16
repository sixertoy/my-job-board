/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import './abstractcard.css';
import { moveToTrash } from './../actions';

const AbstractCard = ({
  item,
  minify,
  nostatus,
  movetotrash
}) => (
  <div className="abstract-card flex-columns relative">
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
        <span className={`abstract-card-badge ${item.isactive ? 'active' : ''}`}>
          <span><i className="myjobboard-star" /></span>
        </span>
        <button className={'abstract-card-badge'}
          onClick={() => {}}>
          <span><i className="myjobboard-calendar" /></span></button>
        <button className={'abstract-card-badge'}
          onClick={() => {}}>
          <span><i className="myjobboard-mail" /></span></button>
        <button className={'abstract-card-badge'}
          onClick={() => {}}>
          <span><i className="myjobboard-comment" /></span></button>
        <button className={'abstract-card-badge'}
          onClick={() => {}}>
          <span><i className="myjobboard-user-add" /></span></button>
        <button className={'abstract-card-badge'}
          onClick={evt => movetotrash(evt)}>
          <span><i className="myjobboard-trash" /></span></button>
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
  movetotrash: PropTypes.func.isRequired
});

export default connect(
  () => ({}),
  (dispatch, props) => ({
    movetotrash: (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      return dispatch(moveToTrash(props.item));
    }
  })
)(AbstractCard);
