import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/MovieCard.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&page=1";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="MovieCard">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {movies.map((movie, index) => {
          const apiImg = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
          return (
            <SwiperSlide key={index}>
              <img src={apiImg} alt="Movie poster" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
