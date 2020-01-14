import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footer from '../Assets/svg/footer.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-first-layer">
          <div>
            <Link>
              <img src={footer} alt="Hr-work" />
            </Link>
          </div>
          <div>
            <ul>
              <Link className="link">
                <li>About</li>
              </Link>
              |
              <Link className="link">
                <li>Our Packages</li>
              </Link>
              |
              <Link className="link">
                <li>Blog</li>
              </Link>
              |
              <Link className="link">
                <li>Careers</li>
              </Link>
              |
              <Link className="link">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <p>
              <big>CONTACT US</big>
              <br />
              11 Deji Olamiju Street, <br /> Soluyi-Gbagada, Lagos
              <br /> Call: 07034417961
              <br /> Email: info@alphaduxconsulting.com
            </p>
          </div>
        </div>

        <div className="footer-second-layer">
          <div>
            <p>© 2019 HR Work All right reserved</p>
          </div>
          <div>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>
          <div className="font-awesome-icon">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
      </div>
    );
  }
}
