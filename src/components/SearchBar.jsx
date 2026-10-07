function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search">
      <span>🔍</span>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;