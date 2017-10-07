/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

// application
import { shorten } from './../../utils/shorten';
import { humandate } from './../../utils/humandate';

const AbstractCard = ({ isdragging, title, date, short }) => (
  <div className="kanban-card relative"
    style={{ opacity: (isdragging ? 0.45 : 1) }}>
    <button className="kanban-card-button"
      onClick={() => {}}><span><i className="" /></span></button>
    <p className="kanban-card-date">
      <span>{humandate(new Date(date))}</span></p>
    <h2 className="kanban-card-title">
      <span>{shorten(title, 60)}</span></h2>
    <div dangerouslySetInnerHTML={{ __html: short }} />
  </div>
);

AbstractCard.propTypes = ({
  date: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isdragging: PropTypes.bool.isRequired
});

export default AbstractCard;
