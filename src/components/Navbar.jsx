import React from "react";
import btn from "../img/btn-home_logo.png";

import { Link } from "react-router-dom";

import Search from "./Search";
import "../styles/Navbar.css";

export default function Navbar() {
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
        <Search />
      </nav>
    </div>
  );
}
