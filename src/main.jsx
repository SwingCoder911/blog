import React from 'react';
import {render} from 'react-dom';
require("./index.html");
require('./sass/Blog.scss');
class Blog extends React.Component {
  render () {
    return <p>Hello React!</p>;
  }
}

render(<Blog/>, document.getElementById('app'));