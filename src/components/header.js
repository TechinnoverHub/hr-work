import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="header-list">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul>
            <Link className="link">
              <li>Who we are</li>
            </Link>
            <Link className="link">
              <li>Packages</li>
            </Link>
            <Link className="link">
              <li>Blog</li>
            </Link>
            <Link className="link">
              <li>Careers</li>
            </Link>
            <Link className="link">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
