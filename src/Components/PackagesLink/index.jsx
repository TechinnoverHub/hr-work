import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import Skeleton from 'react-loading-skeleton';

export default ({ packageLoading }) => {
  const isFetching = packageLoading === 'FETCHING';

  if (isFetching) {
    return (
      <div className="packages-link-skeleton">
        <Skeleton height={30} width="100%" />
      </div>
    );
  }

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
          to="/packages/retainership"
          className="list-item"
          activeClassName="list-item-active"
        >
          RETAINERSHIP
        </NavLink>
        <NavLink
          exact
          to="/packages/off-the-shelf"
          className="list-item"
          activeClassName="list-item-active"
        >
          OFF SHELF
        </NavLink>
        <NavLink
          exact
          to="/packages/professional"
          className="list-item"
          activeClassName="list-item-active"
        >
          PROFESSIONALS
        </NavLink>
      </span>
    </div>
  );
};
