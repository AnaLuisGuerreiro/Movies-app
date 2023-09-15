import React from "react";

import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container bg">
        <Navbar />
        <Header />
        <MovieCard />
      </div>
    </div>
  );
}
export default App;
