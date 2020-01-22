import React from 'react';
import { Link } from 'react-router-dom';
import footer from 'Assets/svg/footer.svg';
import Styles from './index.module.scss';

export default () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer__container}>
        <div className={Styles.footer__first__layer}>
          <div>
            <Link to="/">
              <img src={footer} alt="Hr-work" />
            </Link>
          </div>
          <div>
            <ul>
              <Link className={Styles.link} to="/about">
                <li>About</li>
              </Link>
              |
              <Link className={Styles.link} to="/">
                <li>Our Packages</li>
              </Link>
              |
              <Link className={Styles.link} to="/">
                <li>Blog</li>
              </Link>
              |
              <Link className={Styles.link} to="/">
                <li>Careers</li>
              </Link>
              |
              <Link className={Styles.link} to="/">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
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
          <div>
            <p>© 2019 HR Work All right reserved</p>
          </div>
          <div>
            <p>Terms & Conditions | Privacy Policy</p>
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
