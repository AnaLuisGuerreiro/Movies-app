import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

import "./styles/App.css";

function App() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&page=1";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies);

  return (
    <div className="App">
      <div className="container bg">
        <Header />
        <div className="movies">
          {movies.map((movie, index) => {
            return (
              <div key={index}>
                <MovieCard {...movie} />
              </div>
            );
          })}
        </div>
        <img src="./img/btn-home_logo.png" alt="log" />
        <Navbar />
      </div>
    </div>
  );
}
export default App;
