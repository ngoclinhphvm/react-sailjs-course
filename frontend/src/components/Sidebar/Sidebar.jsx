import "./Sidebar.css";

const SidebarItem = ({ iconPath, label }) => {
  return (
    <a href="/profile" className="sidebar-item">
      <img src={iconPath} />
      <div className="label">{label}</div>
    </a>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <SidebarItem iconPath="/icons/dashboard.png" label="Dashboard" />
        <SidebarItem iconPath="/icons/products.png" label="Products" />
        <SidebarItem iconPath="/icons/category.png" label="Categories" />
        <SidebarItem iconPath="/icons/settings.png" label="Settings" />
      </nav>
    </aside>
  );
};

export default Sidebar;
