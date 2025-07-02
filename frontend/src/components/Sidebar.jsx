const SidebarItem = ({ iconPath, itemLabel, path }) => {
  return (
    <a
      href={path}
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
    <aside className="hidden w-70 flex-col gap-1 lg:flex">
      <nav className="p-3">
        <SidebarItem
          path="/"
          iconPath="/icons/dashboard.png"
          itemLabel="Dashboard"
        />
        <SidebarItem
          path="/products"
          iconPath="/icons/products.png"
          itemLabel="Products"
        />
        <SidebarItem
          path="/add"
          iconPath="/icons/customers.png"
          itemLabel="Add"
        />
        <SidebarItem
          path="/about"
          iconPath="/icons/shop.png"
          itemLabel="About"
        />
        <SidebarItem iconPath="/icons/promote.png" itemLabel="Promote" />
      </nav>
    </aside>
  );
};

export default Sidebar;
