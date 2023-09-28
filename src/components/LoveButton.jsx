import React from "react";
import { useFavorites } from "../global/FavoritesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/LoveButton.css";

export default function LoveButton({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  function toggleLove() {
    if (isFavorite) {
      // Remove the movie from favorites
      removeFromFavorites(movie.id);
      console.log(movie);
      // Retrieve the current list of favorite movies from localStorage
      const storedFavoriteMovies =
        JSON.parse(localStorage.getItem("favoriteMovies")) || [];

      // Remove the movie from the localStorage list
      const updatedFavoriteMovies = storedFavoriteMovies.filter(
        (favMovie) => favMovie.id !== movie.id
      );

      // Update the localStorage with the updated list of favorite movies.
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(updatedFavoriteMovies)
      );
    } else {
      addToFavorites(movie);

      // Add new movie to the list in localStorage
      const storedFavoriteMovies =
        JSON.parse(localStorage.getItem("favoriteMovies")) || [];
      storedFavoriteMovies.push(movie);
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(storedFavoriteMovies)
      );
    }
  }

  return (
    <div className={`LoveButton ${isFavorite ? "redButton" : ""}`}>
      <div onClick={toggleLove}>
        <FontAwesomeIcon
          icon={isFavorite ? solidHeart : regularHeart}
          className="heart"
        />
        <span>{isFavorite ? "Remove " : "Add to favorites"}</span>
      </div>
    </div>
  );
}
