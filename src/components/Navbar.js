import React from "react";
import btn from "../img/btn-home_logo.png";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="www.facebook.com">
        <img src={btn} alt="Home/logo" />
      </a>
      <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ecedef" }} />
    </div>
  );
}
