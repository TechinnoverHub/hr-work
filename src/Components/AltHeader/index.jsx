import React, { useEffect, useState } from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';
import logoDark from 'Assets/svg/DarkLogo.svg';
import Styles from './index.module.scss';
import noScroll from 'no-scroll';
import { useCartState } from 'Context/cart.context';

import cartIconRed from 'Assets/svg/shopping-cart-red.svg';
import { getCartLength } from 'Utils/cartHelpers';

export default () => {
  const [isSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const history = useHistory();
  const cart = useCartState();
  const { total: cartLength } = getCartLength(cart);

  const keyPressHandler = e => {
    if (e.keycode === 13) {
      setNavOpen(!navOpen);
    }
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
    if (navOpen) {
      noScroll.off();
    } else {
      noScroll.on();
    }
  };

  // const handleScroll = useCallback(() => {
  //   setSticky(window.pageYOffset > 40);
  // }, []);

  useEffect(() => {
    const listener = history.listen(() => {
      if (navOpen) {
        noScroll.off();
      }
    });

    return () => listener();
  }, [history, navOpen]);

  // useEffect(() => {
  //   // console.log('adding event listenerrr');
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     // console.log('removing event listenerrr');
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [handleScroll]);

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
            <img src={logoDark} alt="logo" />
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
              <NavLink
                className={Styles.link}
                to="/about"
                activeClassName={Styles.link__active}
              >
                Who we are
              </NavLink>
            </li>

            <li>
              <NavLink
                className={Styles.link}
                to="/packages"
                activeClassName={Styles.link__active}
              >
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink
                className={Styles.link}
                to="/blog"
                activeClassName={Styles.link__active}
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                className={Styles.link}
                to="/careers"
                activeClassName={Styles.link__active}
              >
                Careers
              </NavLink>
            </li>

            <li>
              <NavLink
                className={Styles.link}
                to="/contact"
                activeClassName={Styles.link__active}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                className={Styles.link}
                to="/account"
                activeClassName={Styles.link__active}
              >
                Account
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={`${Styles.link} ${Styles.cart__link}`}
                activeClassName={Styles.link__active}
              >
                <span className={Styles.cart__icon}>
                  <img src={cartIconRed} alt="cart" />
                  {cartLength > 0 ? (
                    <span className={Styles.cart__counter}>{cartLength}</span>
                  ) : null}
                </span>
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
