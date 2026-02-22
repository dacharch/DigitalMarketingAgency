import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaAngleUp
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="tw-footer" className="tw-footer">
      <div className="container">
        <div className="row">

          {/* Left Info Box */}
          <div className="col-md-12 col-lg-4">
            <div className="tw-footer-info-box">
              <a href="/" className="footer-logo">
                <img
                  src="/images/footer_logo.png"
                  alt="My Work Media Logo"
                  className="img-fluid"
                />
              </a>

              <p className="footer-info-text">
                My Work Media — crafting powerful digital strategies
                that turn brands into market leaders.
              </p>

              <div className="footer-social-link">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/my_work_media"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-12 col-lg-8">

            {/* Contact Row */}
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us">
                  <div className="contact-icon">📍</div>
                  <div className="contact-info">
                    <h3>Noida, Uttar Pradesh, India</h3>
                    <p>
                      Basement Office No-12, A-64, Sector 4, 201301
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">📞</div>
                  <div className="contact-info">
                    <h3>
                      <a href="#">
                        +91 9220145333
                      </a>
                    </h3>
                    <p>Give us a call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <h3>Useful Links</h3>

                  <div className="footer-links">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/services">Services</a></li>
                    </ul>

                    <ul>
                      <li><a href="/projects">Projects</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>
                © {new Date().getFullYear()} My Work Media. All Rights Reserved.
              </span>
            </div>

            <div className="col-md-6">
              <div className="copyright-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/terms">Terms</a></li>
                  <li><a href="/privacy-policy">Privacy</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back To Top */}
      <div className="back-to-top">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <FaAngleUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;