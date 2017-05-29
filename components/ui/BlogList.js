import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from '../ui/BlogItem';

const BlogList = ( { blogs } ) => (
  DOM.div(
    { },
    _.map(
      blogs,
      (blog, key) => (
        React.createElement(BlogItem, { src: blog.image, text: blog.text, key: key })
      )
    )
  )
);

export default BlogList;
