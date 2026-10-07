import { useState } from "react";
import movies from "./data/movies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  const genres = [...new Set(movies.map((m) => m.genre))];
  const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const rateMovie = (id, stars) => {
    setRatings((prev) => ({ ...prev, [id]: stars }));
  };

  const filteredMovies = movies
    .filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
    .filter((m) => filters.genre === "all" || m.genre === filters.genre)
    .filter((m) => filters.year === "all" || m.year === Number(filters.year))
    .filter((m) => m.rating >= filters.minRating)
    .filter((m) => !filters.onlyFavorites || favorites.includes(m.id));

  const favoriteMovies = movies.filter((m) => favorites.includes(m.id));
  const selectedMovie = movies.find((m) => m.id === selectedId);

  return (
    <div className="app">
      <aside className="sidebar">
        <Header query={query} onQueryChange={setQuery} />
        <Filters
          filters={filters}
          genres={genres}
          years={years}
          onFiltersChange={setFilters}
        />
        <Favorites
          movies={favoriteMovies}
          onSelect={setSelectedId}
          onToggleFavorite={toggleFavorite}
        />
      </aside>

      <main className="main">
        <h2 className="page-title">🎞️ Películas</h2>
        <p className="count-pill">
          Mostrando <b>{filteredMovies.length}</b> de <b>{movies.length}</b>
        </p>
        <div className="title-line" />

        <MovieList
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onSelect={setSelectedId}
        />
      </main>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id]}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;