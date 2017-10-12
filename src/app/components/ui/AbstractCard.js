/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

// application
import './abstractcard.css';

const AbstractCard = ({
  item,
  minify,
  noStatus,
  isdragging
}) => (
  <div className="abstract-card flex-columns relative"
    style={{ opacity: (isdragging ? 0.45 : 1) }}>
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
    {noStatus ? false
      : <div className="abstract-card-right-column">
        <button className={`abstract-card-button ${item.isactive ? 'active' : ''}`}
          onClick={() => {}}>
          <span><i className="myjobboard-star" /></span>
        </button>
      </div>}
  </div>
);

AbstractCard.defaultProps = ({
  minify: false,
  lastupdate: 0,
  noStatus: false,
  isdragging: false
});

AbstractCard.propTypes = ({
  minify: PropTypes.bool,
  noStatus: PropTypes.bool,
  isdragging: PropTypes.bool,
  item: PropTypes.object.isRequired
});

export default AbstractCard;
