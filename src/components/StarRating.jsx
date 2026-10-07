function StarRating({ value, onRate }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className="star"
          onClick={() => onRate(star)}
          aria-label={`${star} estrellas`}
        >
          {star <= value ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
}

export default StarRating;