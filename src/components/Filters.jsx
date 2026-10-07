function Filters({ filters, genres, years, onFiltersChange }) {
  const update = (field, value) => onFiltersChange({ ...filters, [field]: value });

  return (
    <section className="filters">
      <p className="section-label">FILTROS</p>

      <select value={filters.genre} onChange={(e) => update("genre", e.target.value)}>
        <option value="all">🏷️ Todos los géneros</option>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <select value={filters.year} onChange={(e) => update("year", e.target.value)}>
        <option value="all">📅 Todos los años</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      <select
        value={filters.minRating}
        onChange={(e) => update("minRating", Number(e.target.value))}
      >
        <option value={0}>⭐ Cualquier calificación</option>
        <option value={7}>⭐ 7 o más</option>
        <option value={8}>⭐ 8 o más</option>
        <option value={9}>⭐ 9 o más</option>
      </select>

      <button
        className={filters.onlyFavorites ? "toggle active" : "toggle"}
        onClick={() => update("onlyFavorites", !filters.onlyFavorites)}
      >
        ❤️ Solo favoritas
      </button>
    </section>
  );
}

export default Filters;