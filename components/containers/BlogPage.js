import React, {DOM} from 'react';

import BlogList from '../ui/BlogList';

const blogs = [
  {
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 1'
  },
  {
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 2'
  },
  {
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 3'
  }
];

class BlogPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { blogs };
  }

  render() {

    return DOM.div(
      { },
      React.createElement(BlogList, { blogs: this.state.blogs })
    );
  }
}

export default BlogPage;
