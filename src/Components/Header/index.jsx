import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'Assets/svg/logo.svg';
import Styles from './index.module.scss';

export default () => {
  return (
    <div className={Styles.header}>
      <nav className={Styles.header__container}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={Styles.link__wrapper}>
          <li>
            <Link className={Styles.link}>Who we are</Link>
          </li>

          <li>
            <Link className={Styles.link}>Packages</Link>
          </li>

          <li>
            <Link className={Styles.link}>Blog</Link>
          </li>

          <li>
            <Link className={Styles.link}>Careers</Link>
          </li>

          <li>
            <Link className={Styles.link}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
