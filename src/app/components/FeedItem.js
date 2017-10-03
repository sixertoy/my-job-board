/* eslint
  react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import './feeditem.css';
import { cutwords } from './../utils/cutwords';
import { humandate } from './../utils/humandate';
import { striptags } from './../utils/striptags';
import { trimstring } from './../utils/trimstring';

const renderDescription = (description) => {
  let str = trimstring(description);
  str = striptags(str);
  return { __html: cutwords(str) };
};

const FeedItem = ({ title, date, description, link }) => (
  <div className="feed-item-container">
    <p className="feed-item-date">
      <span>{humandate(new Date(date))}</span></p>
    <h2 className="feed-item-title">
      <a href={link}>{title}</a></h2>
    <div dangerouslySetInnerHTML={renderDescription(description)} />
  </div>
);

FeedItem.propTypes = {
  date: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default FeedItem;
