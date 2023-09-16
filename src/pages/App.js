import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importe Routes em vez de Switch

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Favorites from "./Favorites"; // Importe o componente Favorites

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="bg">
          <Router>
            <Navbar />
            <Header />
            <Routes>
              {" "}
              <Route path="/" element={<MovieCard />} />{" "}
              <Route path="/favorites" element={<Favorites />} />{" "}
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
