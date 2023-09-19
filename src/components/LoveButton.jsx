import React, { useState } from "react";
import "../styles/LoveButton.css";
// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

export default function LoveButton() {
  const [love, setLove] = useState("false");

  function toggleLove() {
    setLove(!love);
  }

  return (
    <div className="LoveButton">
      <div onClick={toggleLove}>
        <FontAwesomeIcon
          icon={love ? regularHeart : solidHeart}
          className="heart"
        />
        <span>Add favorites</span>
      </div>
    </div>
  );
}
