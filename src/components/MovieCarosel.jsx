import React, { useEffect, useState } from "react";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import LoveButton from "./LoveButton";
import "../styles/MovieCarosel.css";

export default function MovieCarosel() {
  const [movies, setMovies] = useState([]);

  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&page=3";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="MovieCarosel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={Math.floor(movies.length / 2)}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {movies.map((movie, index) => {
          const apiImg = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

          return (
            <SwiperSlide key={index}>
              <img src={apiImg} alt="Movie poster" />
              <div className="info">
                <span>
                  <p className="title">{movie.title}</p>
                  <p className="vote">
                    {movie.vote_average}
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e7d036" }}
                      className="star"
                    />
                  </p>
                </span>
                <LoveButton />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
