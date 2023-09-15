import React from "react";
import btn from "../img/btn-home_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faListUl,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="float">
        <a href="www.facebook.com">
          <img src={btn} alt="Home/logo" />
        </a>
      </div>
      <div className="box">
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon={faHouse} className="icon" />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faThumbsDown} className="icon" />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faListUl} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
