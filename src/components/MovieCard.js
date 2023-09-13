import React from "react";
import { motion } from "framer-motion";

import "../styles/MovieCard.css";

export default function MovieCard(props) {
  const apiImg = `https://image.tmdb.org/t/p/w200/${props.poster_path}`;
  return (
    <div className="MovieCard">
      <motion.div className="image">
        <img src={apiImg} alt="Movie poster" />
      </motion.div>
    </div>
  );
}
