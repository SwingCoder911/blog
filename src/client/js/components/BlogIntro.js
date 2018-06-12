import React from 'react';

require('../../sass/components/BlogIntro.scss');
export default class BlogIntro extends React.Component {
    render () {
        return (<aside className="blog-intro">
            <img src="/images/scotch-cigar-background.jpg" />
        </aside>);
    }
}
