import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My CMS</h1>
        <div className="header-link-container">
          <a href="/" className="header-link">
            Dashboard
          </a>
          <a href="/" className="header-link">
            Products
          </a>
          <a href="/" className="header-link">
            Categories
          </a>
          <a href="/" className="header-link">
            Settings
          </a>
        </div>
        <img src="/icons/profile.png" />
      </div>
    </header>
  );
};

export default Header;
