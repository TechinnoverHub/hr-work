import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from 'Assets/svg/logo.svg';
import logoDark from 'Assets/svg/DarkLogo.svg';
import Styles from './index.module.scss';
import noScroll from 'no-scroll';

export default () => {
  const [isSticky, setSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const history = useHistory();

  const keyPressHandler = e => {
    if (e.keycode === 13) {
      setNavOpen(!navOpen);
    }
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
    noScroll.toggle();
  };

  const handleScroll = useCallback(() => {
    setSticky(window.pageYOffset > 40);
  }, []);

  useEffect(() => {
    const listener = history.listen(() => {
      noScroll.off();
    });

    return () => listener();
  }, [history]);

  useEffect(() => {
    // console.log('adding event listenerrr');
    window.addEventListener('scroll', handleScroll);
    return () => {
      // console.log('removing event listenerrr');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${Styles.header} ${
        isSticky ? Styles.sticky : Styles.stickOut
      }`}
    >
      <div
        className={`${Styles.header__container} ${
          navOpen ? Styles.open : null
        }`}
      >
        <div className={Styles.logoContainer}>
          <Link to="/">
            <img src={isSticky || navOpen ? logoDark : logo} alt="logo" />
          </Link>
        </div>

        <nav className={navOpen ? Styles.open : null}>
          <div
            className={Styles.toggleMenu}
            onClick={toggleNav}
            onKeyPress={keyPressHandler}
            role="menubar"
            tabIndex={0}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul
            className={`${Styles.link__wrapper} ${
              isSticky ? Styles.link_sticky : null
            }`}
          >
            <li>
              <Link className={Styles.link} to="/about">
                Who we are
              </Link>
            </li>

            <li>
              <Link className={Styles.link} to="/packages">
                Packages
              </Link>
            </li>

            <li>
              <Link className={Styles.link} to="/blog">
                Blog
              </Link>
            </li>

            <li>
              <Link className={Styles.link} to="/careers">
                Careers
              </Link>
            </li>

            <li>
              <Link className={Styles.link} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
