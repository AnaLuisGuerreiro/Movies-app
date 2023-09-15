import React, { useEffect, useState } from "react";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Zoom } from "swiper/modules";

import "../styles/MovieCard.css";

export default function MovieCard() {
  const [favorite, setFavorite] = useState([]);
  const [movies, setMovies] = useState([]);
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&page=3&limit=10";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  function addFavorites() {
    setFavorite(!favorite);
  }

  return (
    <div className="MovieCard">
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
        loop={true}
        modules={[EffectCoverflow, Pagination, Zoom]}
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
                  <p className="vote">{movie.vote_average}</p>
                </span>
                <div>
                  <FontAwesomeIcon icon={regularHeart} onClick={addFavorites} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
