import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    // Adicione o filme à lista de favoritos
    setFavorites([...favorites, movie]);
  };

  const removeFromFavorites = (movieId) => {
    // Remova o filme da lista de favoritos
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
