/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import './kanbanitem.css';
import { humandate } from './../utils/humandate';

const KanbanItem = ({ title, date, short }) => (
  <div className="kanbanitem-container relative">
    <button className="kanbanitem-button"
      onClick={() => {}}><span><i className="" /></span>
    </button>
    <p className="kanbanitem-date">
      <span>{humandate(new Date(date))}</span></p>
    <h2 className="kanbanitem-title">
      <span>{title}</span></h2>
    <div dangerouslySetInnerHTML={{ __html: short }} />
  </div>
);

KanbanItem.propTypes = {
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired
};

export default KanbanItem;
