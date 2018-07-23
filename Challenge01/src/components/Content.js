import React from 'react';

import PropTypes from 'prop-types';
import Post from './Post';

const Content = ({ data }) => (
  <section className="content">
    {data && data.map(post => <Post key={post.id} data={post} />)}
  </section>
);

Content.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Content;
