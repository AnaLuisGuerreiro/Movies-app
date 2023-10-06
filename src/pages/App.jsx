import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importe Routes em vez de Switch

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MovieCarousel from "../components/MovieCarousel";
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
                <Route path="/" element={<MovieCarousel />} />{" "}
                <Route path="/favorites" element={<Favorites />} />{" "}
                <Route path="/movieCards" element={<MovieCards />} />
              </Routes>
            </Router>
          </div>
        </div>
        <footer className="Footer">
          <span className="coded"> Coded by Ana Guerreiro </span>
          <br />
          <a href="https://github.com/AnaLuisGuerreiro/weather-react">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#51c9bd" }}
              target="_blank"
              className="git"
            />
          </a>
          <a href="https://www.linkedin.com/in/ana-luis-guerreiro/">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2767a3" }}
              target="_blank"
              className="linkedin"
            />
          </a>
        </footer>
      </div>
    </FavoritesProvider>
  );
}

export default App;
