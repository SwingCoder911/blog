import React from 'react';
import {render} from 'react-dom';

import Header from './components/Header';
import BlogContent from './components/BlogContent';

require("../views/index.html");
require('../fonts/nowayregular.scss');
require('../sass/Blog.scss');
class Blog extends React.Component {
  render () {
    return (
      <section className="blog-container">
        <Header />
        <BlogContent/>
      </section>      
    );
  }
}

render(<Blog/>, document.getElementById('app'));