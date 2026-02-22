import "./Header.css";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="main-container">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Our Process</a></li>
          {/* <li><a href="#">Projects</a></li>
          <li><a href="#">Reviews</a></li> */}
        </ul>
      </nav>

      <div>
        <a
          href="https://wa.me/919220145333?text=Hi%20My%20Work%20Media,%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp-btn"
        >
          <FaWhatsapp style={{ marginRight: "8px" }} />
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;