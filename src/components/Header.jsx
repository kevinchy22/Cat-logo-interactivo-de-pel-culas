import SearchBar from "./SearchBar";

function Header({ query, onQueryChange }) {
  return (
    <header className="brand-box">
      <div className="brand">🎬 Puro Cine PAPÁ</div>
      <SearchBar query={query} onQueryChange={onQueryChange} />
    </header>
  );
}

export default Header;