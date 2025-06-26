import "./Sidebar.css";

const SidebarItem = ({ iconPath, itemLabel }) => {
  return (
    <a href="/" className="sidebar-item">
      <img src={iconPath} />
      <div className="sidebar-item-label">{itemLabel}</div>
    </a>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <nav className="sidebar-nav">
        <SidebarItem iconPath="/icons/dashboard.png" itemLabel="Dashboard" />
        <SidebarItem iconPath="/icons/products.png" itemLabel="Products" />
        <SidebarItem iconPath="/icons/category.png" itemLabel="Categories" />
        <SidebarItem iconPath="/icons/settings.png" itemLabel="Settings" />
      </nav>
    </aside>
  );
};

export default Sidebar;
