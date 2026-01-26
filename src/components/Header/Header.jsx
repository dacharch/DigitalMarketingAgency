import "./Header.css";

const Header = () => {
  return (
    <header className="main-container">
      <div className="logo">
        <img src="/title.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Reviews</a></li>
        </ul>
      </nav>

      <div>
        <button className="contact-btn">Contact US</button>
      </div>
    </header>
  );
};

export default Header;
