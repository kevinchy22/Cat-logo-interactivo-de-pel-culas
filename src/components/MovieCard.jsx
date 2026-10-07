function MovieCard({ movie, isFavorite, onToggleFavorite, onSelect }) {
  return (
    <article className="card" onClick={() => onSelect(movie.id)}>
      <div className="poster">
        <img src={movie.image} alt={movie.title} />
        <span className="badge">⭐ {movie.rating}</span>
        <button
          className="fav"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(movie.id);
          }}
          aria-label="Favorito"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <span className="tag">{movie.genre}</span>
      </div>
      <div className="info">
        <h3>{movie.title}</h3>
        <p className="meta">{movie.year}</p>
        <p className="desc">{movie.description}</p>
      </div>
    </article>
  );
}

export default MovieCard;