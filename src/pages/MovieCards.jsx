import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "../styles/MovieCards.css";

export default function MovieCards() {
  const location = useLocation();

  // Use useMemo to memorize the results variable
  const results = useMemo(() => {
    return location.state && location.state.results
      ? location.state.results
      : [];
  }, [location.state]);

  // Filter movies without poster
  const filteredResults = results.filter((movie) => movie.poster_path);

  return (
    <div className="MovieCards">
      <div className="infos">
        {filteredResults.length === 0 ? (
          <p>No movies found</p>
        ) : (
          filteredResults.map((movie) => (
            <div key={movie.id} className="movieCard">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                className="image"
              />
              <h6 className="title">{movie.title}</h6>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
