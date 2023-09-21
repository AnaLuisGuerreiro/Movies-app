import React, { useState } from "react";
import { Link } from "react-router-dom";
import btn from "../img/btn-home_logo.png";

import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function onChange(e) {
    e.preventDefault();
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() !== "") {
      // Redirection to MovieCards page with API results as part of the route
      navigate("/MovieCards", { state: { query: newQuery } });
    } else {
      // Redirect to the home page if the search query is empty
      navigate("/");
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    ).then((res) =>
      res.json().then((data) => {
        if (!data.erros) {
          // Redirection to MovieCards page with API results as part of the route
          navigate("/MovieCards", { state: { results: data.results } });
        } else {
          // Redirect to the home page if the search query is empty
          navigate("/MovieCards");
        }
      })
    );
  }

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand" href="/">
          <img src={btn} alt="logo" />
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/Favorites" className="fav" href="/">
              Favorites
            </Link>
          </li>
        </ul>
        <form>
          <input
            type="text"
            placeholder=" Type a movie"
            value={query}
            onChange={onChange}
          />
        </form>
      </nav>
    </div>
  );
}
