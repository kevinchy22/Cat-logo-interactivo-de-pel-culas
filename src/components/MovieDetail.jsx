import StarRating from "./StarRating";

function MovieDetail({ movie, isFavorite, userRating, onToggleFavorite, onRate, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <section className="detail" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✖</button>
        <img src={movie.image} alt={movie.title} />
        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="meta">{movie.genre} · {movie.year}</p>
          <p>⭐ Calificación: {movie.rating}</p>
          <p>{movie.description}</p>
          <p>Tu valoración: {userRating ? `${userRating}/5` : "sin calificar"}</p>
          <StarRating value={userRating || 0} onRate={(stars) => onRate(movie.id, stars)} />
          <button className="toggle" onClick={() => onToggleFavorite(movie.id)}>
            {isFavorite ? "❤️ Quitar de favoritos" : "🤍 Agregar a favoritos"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default MovieDetail;