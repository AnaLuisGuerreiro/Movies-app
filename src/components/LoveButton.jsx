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
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
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
