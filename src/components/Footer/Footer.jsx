import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram, FaPaperPlane, FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="tw-footer" className="tw-footer">
      <div className="container">
        <div className="row">

          {/* Left Info Box */}
          <div className="col-md-12 col-lg-4">
            <div className="tw-footer-info-box">
              <a href="/" className="footer-logo">
                <img src="/images/footer_logo.png" alt="footer_logo" className="img-fluid" />
              </a>
              <p className="footer-info-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              </p>

              <div className="footer-social-link">
                <h3>Follow us</h3>
                <ul>
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaGooglePlusG /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
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
                    <h3>New York, USA</h3>
                    <p>1010 Grand Avenue</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">📞</div>
                  <div className="contact-info">
                    <h3>009-215-5596</h3>
                    <p>Give us a call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links + Subscribe */}
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <h3>Useful Links</h3>
                  <div className="footer-links">
                    <ul>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Projects</a></li>
                      <li><a href="#">Our Team</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Testimonials</a></li>
                      <li><a href="#">FAQ</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <div className="footer-widget">
                  <h3>Subscribe</h3>
                  <p>Don’t miss our updates. Enter your email below.</p>
                  <form>
                    <div className="footer-form">
                      <input type="email" placeholder="Email Address" />
                      <button type="submit">
                        <FaPaperPlane />
                      </button>
                    </div>
                  </form>
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
              <span>© 2026 All Rights Reserved</span>
            </div>
            <div className="col-md-6">
              <div className="copyright-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="back-to-top">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FaAngleUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
