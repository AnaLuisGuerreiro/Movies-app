import React from "react";
import { useFavorites } from "../components/global/FavoritesContext";
import "../styles/Favorites.css";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="Favorites">
      <h2>Favorites</h2>
      <div className="info">
        {favorites.map((movie) => (
          <div key={movie.id} className="cards">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              className="images"
            />
            <h6 className="titles">{movie.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
