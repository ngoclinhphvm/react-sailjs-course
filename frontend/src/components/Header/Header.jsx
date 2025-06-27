import "./Header.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <button className="search-button">
        <img src="https://img.icons8.com/?size=100&id=14079&format=png&color=000000" />
      </button>
      <input type="text" placeholder="Search anything..." />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My CMS</h1>
      <div className="header-actions">
        <SearchBar />
        <button className="create-button">Create</button>

        <button className="chip">
          <img src="https://img.icons8.com/?size=100&id=16008&format=png&color=000000" />
        </button>
        <button className="chip">
          <img src="https://img.icons8.com/?size=100&id=461&format=png&color=000000" />
        </button>
        <button className="chip profile">
          <img src="https://images.genius.com/196ba084f993ae312b3f77be14bfd964.1000x1000x1.png" />
        </button>
      </div>
    </header>
  );
};

export default Header;
