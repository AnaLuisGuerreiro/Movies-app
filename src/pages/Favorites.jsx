import React from "react";
import { useFavorites } from "../global/FavoritesContext";
import "../styles/Favorites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const { favorites } = useFavorites();

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
                <span>Remove</span>
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
