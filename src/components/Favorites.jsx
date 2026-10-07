function Favorites({ movies, onSelect, onToggleFavorite }) {
  return (
    <section className="favorites">
      <p className="section-label">MIS FAVORITAS ({movies.length})</p>
      {movies.length === 0 ? (
        <p className="muted">Aún no has agregado favoritas.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <span onClick={() => onSelect(movie.id)}>{movie.title}</span>
              <button onClick={() => onToggleFavorite(movie.id)}>✖</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Favorites;