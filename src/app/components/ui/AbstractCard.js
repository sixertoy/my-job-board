/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

// application
import './abstractcard.css';

const AbstractCard = ({
  date,
  title,
  content
}) => (
  <div className="abstract-card-container">
    <button className="abstract-card-button"
      onClick={() => {}}><span><i className="" /></span>
    </button>
    <p className="abstract-card-date">
      <span>{date}</span></p>
    <h2 className="abstract-card-title">
      <span>{title}</span></h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

AbstractCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default AbstractCard;
