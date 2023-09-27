import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    // Add to favorite list at the beginning
    setFavorites([movie, ...favorites]);
  };

  const removeFromFavorites = (movieId) => {
    // Remove from favorite list
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
  };

  const updatedFavoritesList = (newFavoritesList) => {
    setFavorites(newFavoritesList);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        updatedFavoritesList,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
