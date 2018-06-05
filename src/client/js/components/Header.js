import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        test: React.PropTypes.string.isRequired
    }
    constructor(props){
        super(props);
    }
    render () {
        return (<nav>
            <ul>
                <li>YHWH</li>
                <li>Dance</li>
                <li>Code</li>
                <li>Whiskey/Cigars</li>
            </ul>
        </nav>);
    }
}
