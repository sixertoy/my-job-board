/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

// application
import './abstractcard.css';
import { shorten } from './../../utils/shorten';
import { cleanstr } from './../../utils/cleanstr';
import { humandate } from './../../utils/humandate';

const AbstractCard = ({ isdragging, item, minify }) => (
  <div className="abstract-card relative"
    style={{ opacity: (isdragging ? 0.45 : 1) }}>
    <button className="abstract-card-button"
      onClick={() => {}}><span><i className="" /></span></button>
    <p className="abstract-card-date">
      <span>{humandate(new Date(item.date))}</span></p>
    <h2 className="abstract-card-title">
      <span>{minify
        ? shorten(item.title, 60)
        : cleanstr(item.title)}
      </span></h2>
    <div dangerouslySetInnerHTML={{ __html: minify
      ? cleanstr(item.short)
      : cleanstr(item.description) }} />
  </div>
);

AbstractCard.defaultProps = ({
  minify: false,
  isdragging: false
});

AbstractCard.propTypes = ({
  minify: PropTypes.bool,
  isdragging: PropTypes.bool,
  item: PropTypes.object.isRequired
});

export default AbstractCard;
