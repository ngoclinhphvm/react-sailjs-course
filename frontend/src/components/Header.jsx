function SearchBar() {
  return (
    <div className="flex h-10 w-80 items-center rounded-4xl bg-white">
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
    <button className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-white">
      <img
        src={imagePath}
        className="block size-2/3 rounded-full object-contain"
      />
    </button>
  );
}

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between bg-amber-200">
      <div className="flex h-full w-70 items-center justify-center">
        <img
          className="size-3/4 object-contain"
          src="/icons/logo.png"
          alt="Logo"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-left text-3xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <SearchBar />
        <button className="h-10 w-fit rounded-3xl bg-black px-4 text-sm text-white">
          Create
        </button>
        <Chip imagePath="https://img.icons8.com/?size=100&id=16008&format=png&color=000000" />
        <Chip imagePath="https://img.icons8.com/?size=100&id=461&format=png&color=000000" />
        <Chip imagePath="https://images.genius.com/196ba084f993ae312b3f77be14bfd964.1000x1000x1.png" />
      </div>
    </header>
  );
};

export default Header;
