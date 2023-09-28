import React, { useEffect } from "react";
import { useFavorites } from "../global/FavoritesContext";
import "../styles/Favorites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const { favorites, removeFromFavorites, addToFavorites } = useFavorites();

  // Function to remove movies from favorites
  const handleRemoveFromFavorites = (movieId) => {
    // Remove the movie from favorites state
    removeFromFavorites(movieId);

    // Remove the movie from localStorage
    const storedFavoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const updatedFavoriteMovies = storedFavoriteMovies.filter(
      (favMovie) => favMovie.id !== movieId
    );
    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(updatedFavoriteMovies)
    );
  };

  useEffect(() => {
    // Retrieve the list of favorite movies from localStorage
    const storedFavoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    // Update the state of favorites with data from localStorage
    // Maintain the original order of addition (from oldest to newest)
    storedFavoriteMovies.forEach((movie) => {
      if (!favorites.some((favMovie) => favMovie.id === movie.id)) {
        addToFavorites(movie);
      }
    });
  }, [addToFavorites, favorites]);

  return (
    <div className="Favorites">
      <h2 className="mb-4">Favorites</h2>
      <div className="fav-info">
        {favorites.map((movie) => (
          <div key={movie.id} className="cards">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              className="fav-images"
            />
            <div className="fav-hover">
              <h6 className="fav-title">{movie.title}</h6>
              <div className="button">
                <span
                  className="remove"
                  onClick={() => handleRemoveFromFavorites(movie.id)}
                >
                  Remove
                </span>
                <FontAwesomeIcon icon={faXmark} className="xmark" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
