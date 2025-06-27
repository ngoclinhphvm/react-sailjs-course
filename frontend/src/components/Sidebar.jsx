const SidebarItem = ({ iconPath, itemLabel }) => {
  return (
    <a
      href="/"
      className="group flex items-center gap-4 rounded-md py-3 pl-8 hover:bg-white"
    >
      <img className="h-1/8 w-1/8" src={iconPath} />
      <div className="text-lg text-gray-600 group-hover:font-semibold group-hover:text-black">
        {itemLabel}
      </div>
    </a>
  );
};

const Sidebar = () => {
  return (
    <aside className="flex w-70 flex-col gap-1">
      <nav className="p-3">
        <SidebarItem iconPath="/icons/dashboard.png" itemLabel="Dashboard" />
        <SidebarItem iconPath="/icons/products.png" itemLabel="Products" />
        <SidebarItem iconPath="/icons/customers.png" itemLabel="Customer" />
        <SidebarItem iconPath="/icons/shop.png" itemLabel="Shop" />
        {/* <SidebarItem iconPath="/icons/income.png" itemLabel="Income" /> */}
        <SidebarItem iconPath="/icons/promote.png" itemLabel="Promote" />
      </nav>
    </aside>
  );
};

export default Sidebar;
