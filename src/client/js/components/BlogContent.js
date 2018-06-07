import React from 'react';
import PropTypes from 'prop-types';

require('../../sass/components/BlogContent.scss');
export default class BlogContent extends React.Component {
    render () {
        return (<section className="blog-content">
            <ul className="blog-list">
                <li className="blog-list-item">
                    <label className="list-item-title">Blog Title</label>
                    <time className="list-item-date">01/01/2018</time>
                </li>
                <li className="blog-list-item">
                    <label className="list-item-title">Blog Title</label>
                    <time className="list-item-date">01/01/2018</time>
                </li>
            </ul>
        </section>);
    }
}
