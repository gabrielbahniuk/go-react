import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, author, time }) => (
  <div className="postHeader">
    <img alt="avatar" className="avatar" src={avatar} />
    <div className="headerContent">
      <p className="author">{author}</p>
      <p className="time">{time}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default PostHeader;
