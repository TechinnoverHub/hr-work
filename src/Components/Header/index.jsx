import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from 'Assets/svg/logo.svg';
import logoDark from 'Assets/svg/DarkLogo.svg';
import Styles from './index.module.scss';

export default () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.pageYOffset > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`${Styles.header} ${
        isSticky ? Styles.sticky : Styles.stickOut
      }`}
    >
      <nav className={Styles.header__container}>
        <Link to="/">
          <img src={isSticky ? logoDark : logo} alt="logo" />
        </Link>
        <ul
          className={`${Styles.link__wrapper} ${
            isSticky ? Styles.link_sticky : null
          }`}
        >
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
