import React from 'react';
import PropTypes from 'prop-types';

require('../../sass/components/Header.scss');
export default class Header extends React.Component {
    render () {
        return (<header className="header">
            <nav>
                <ul className="nav-list">
                    <li className="active">YHWH</li>
                    <li>Dance</li>
                    <li>Code</li>
                    <li>Whiskey/Cigars</li>
                </ul>
            </nav>
        </header>);
    }
}
