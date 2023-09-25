import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importe Routes em vez de Switch

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MovieCarosel from "../components/MovieCarosel";
import Favorites from "./Favorites";
import MovieCards from "./MovieCards";

import "../styles/App.css";
import { FavoritesProvider } from "../global/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <div className="container">
          <div className="bg">
            <Router>
              <Navbar />
              <Header />
              <Routes>
                {" "}
                <Route path="/" element={<MovieCarosel />} />{" "}
                <Route path="/Favorites" element={<Favorites />} />{" "}
                <Route path="/MovieCards" element={<MovieCards />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </FavoritesProvider>
  );
}

export default App;
