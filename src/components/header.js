import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/svg/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="header-list">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <Link>
            <li>Who we are</li>
          </Link>
          <Link>
            <li>Packages</li>
          </Link>
          <Link>
            <li>Blog</li>
          </Link>
          <Link>
            <li>Careers</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    );
  }
}
