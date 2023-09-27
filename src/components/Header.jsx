import React from "react";
import title from "../img/title-SwipeMovies.png";

import "../styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img src={title} alt="Swipe Movies" className="page-title" />
    </div>
  );
}
