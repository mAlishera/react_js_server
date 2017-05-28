import React, { DOM } from 'react';
import _ from 'lodash';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';

const BlogItem = (props) => (
  DOM.div(
    { },
    React.createElement(Image, {src: props.src}),
    React.createElement(TextBox, {string: props.text}),
  )
);

export default BlogItem;
