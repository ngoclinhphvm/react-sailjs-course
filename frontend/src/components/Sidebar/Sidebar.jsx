import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <a href="/profile" className="sidebar-link">
          Dashboard
        </a>
        <a href="/settings" className="sidebar-link">
          Products
        </a>
        <a href="/about" className="sidebar-link">
          Categories
        </a>
        <a href="/faq" className="sidebar-link">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
