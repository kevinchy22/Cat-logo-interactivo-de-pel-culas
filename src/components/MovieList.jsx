import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, onToggleFavorite, onSelect }) {
  if (movies.length === 0) {
    return <p className="empty">No se encontraron películas con esos criterios.</p>;
  }

  return (
    <section className="grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}

export default MovieList;