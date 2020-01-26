import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default () => {
  return (
    <div className="packages-link">
      <span className="packages-list">
        <NavLink
          exact
          to="/packages"
          className="list-item"
          activeClassName="list-item-active"
        >
          ALL PACKAGES
        </NavLink>
        <NavLink
          exact
          to="/singlepackage"
          className="list-item"
          activeClassName="list-item-active"
        >
          RETAINERSHIP
        </NavLink>
        <NavLink
          exact
          to="/"
          className="list-item"
          activeClassName="list-item-active"
        >
          OFF SHELF
        </NavLink>
        <NavLink
          exact
          to="/"
          className="list-item"
          activeClassName="list-item-active"
        >
          PROFESSIONALS
        </NavLink>
      </span>
    </div>
  );
};
