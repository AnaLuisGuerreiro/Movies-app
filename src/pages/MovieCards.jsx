import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/MovieCards.css";

export default function MovieCards() {
  const location = useLocation();
  const navigate = useNavigate();

  // Use useMemo to memoize the results variable
  const results = useMemo(() => {
    return location.state && location.state.results
      ? location.state.results
      : [];
  }, [location.state]);

  // Use useEffect to handle navigation when the component mounts
  useEffect(() => {
    // Check if the results are empty and show the initial page
    if (results.length === 0) {
      navigate("/");
    }
  }, [results, navigate]);

  // Filtra os filmes sem poster_path
  const filteredResults = results.filter((movie) => movie.poster_path);

  return (
    <div className="MovieCards">
      <div className="infos">
        {filteredResults.map((movie) => (
          <div key={movie.id} className="movieCard">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h6>{movie.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
