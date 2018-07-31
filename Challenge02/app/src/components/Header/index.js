import React, { Component } from 'react';
import { HeaderContainer } from './styles';

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <div className="header-container-repo">
                    <img
                        src="https://avatars3.githubusercontent.com/u/69631?v=4"
                        alt="fb"
                    />
                    <div className="header-title">
                        <strong>react-navigation</strong>
                        <small>Facebook</small>
                    </div>
                </div>

                <select>
                    <option>All</option>
                    <option>Opened</option>
                    <option>Closed</option>
                </select>
            </HeaderContainer>
        );
    }
}
