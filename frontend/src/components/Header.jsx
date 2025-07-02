function SearchBar() {
  return (
    <div className="hidden h-10 w-80 items-center rounded-4xl bg-white lg:flex">
      <img
        className="mx-4 h-1/2"
        src="https://img.icons8.com/?size=100&id=14079&format=png&color=000000"
      />
      <input
        type="text"
        placeholder="Search anything..."
        className="text-sm outline-none"
      />
    </div>
  );
}

function Chip({ imagePath }) {
  return (
    <button className="hidden size-10 items-center justify-center overflow-hidden rounded-full bg-white lg:flex">
      <img
        src={imagePath}
        className="block size-2/3 rounded-full object-contain"
      />
    </button>
  );
}

const Header = ({onToggleTheme}) => {
  return (
    <header className="flex h-20 items-center justify-between p-2">
      <div className="flex h-full w-70 items-center justify-center md:justify-start">
        <img
          className="h-4/5 w-full object-contain"
          src="/icons/logo.png"
          alt="Logo"
        />
      </div>
      <div className="flex-1">
        <h1 className="hidden text-left text-3xl font-semibold lg:block">
          Dashboard
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <SearchBar />
        <button className="hidden h-10 w-fit rounded-3xl bg-black px-4 text-sm text-white lg:block">
          Create
        </button>
        <button
          onClick={onToggleTheme}
          className="hidden h-10 w-fit rounded-3xl bg-black px-4 text-sm text-white lg:block"
        >
          Change theme
        </button>
        <Chip imagePath="https://img.icons8.com/?size=100&id=16008&format=png&color=000000" />
        <Chip imagePath="https://img.icons8.com/?size=100&id=461&format=png&color=000000" />
        <Chip imagePath="https://images.genius.com/196ba084f993ae312b3f77be14bfd964.1000x1000x1.png" />
      </div>
    </header>
  );
};

export default Header;
