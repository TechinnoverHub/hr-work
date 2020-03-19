import React from 'react';
import { Link } from 'react-router-dom';
import footer from 'Assets/svg/footer.svg';
import Styles from './index.module.scss';

export default () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer__container}>
        <div className={Styles.footer__first__layer}>
          <div className={Styles.navLogo}>
            <Link to="/">
              <img src={footer} alt="Hr-work" />
            </Link>
          </div>
          <div className={Styles.nav__wrapper__container}>
            <ul className={Styles.nav__wrapper}>
              <li>
                <Link className={Styles.link} to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className={Styles.link} to="/packages">
                  Our Packages
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
          </div>
          <div className={Styles.nav__address}>
            <p>
              <b>CONTACT US</b>
              <br />
              11 Deji Olamiju Street, <br /> Soluyi-Gbagada, Lagos
              <br /> Call: 07034417961
              <br /> Email: info@alphaduxconsulting.com
            </p>
          </div>
        </div>

        <div className={Styles.footer__second__layer}>
          <div className={Styles.footer__copyright}>
            <p>© 2019 HR Work All right reserved</p>
          </div>
          <div className={Styles.footer__termsAndConditions}>
            <p>
              Terms & Conditions | Privacy Policy |{' '}
              <a
                href="https://techinnover.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designed by Techinnover
              </a>
            </p>
          </div>
          <div className={Styles.font__awesome__icon}>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
