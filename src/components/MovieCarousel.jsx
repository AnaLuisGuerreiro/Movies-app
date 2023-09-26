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
import "../styles/MovieCarousel.css";

export default function MovieCarosel() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&page=${currentPage}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [apiUrl]);

  const loadMoreMovies = () => {
    // Incremente o número da página atual.
    const nextPage = currentPage + 1;

    // Atualize a URL da API com a nova página.
    const nextPageUrl = `https://api.themoviedb.org/3/movie/popular?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&page=${nextPage}`;

    // Faça uma chamada à API para buscar mais filmes.
    fetch(nextPageUrl)
      .then((response) => response.json())
      .then((data) => {
        // Combine os novos filmes com os filmes existentes.
        const updatedMovies = [...movies, ...data.results];

        // Refresh state of the movies and page
        setMovies(updatedMovies);
        setCurrentPage(nextPage);
      });
  };

  return (
    <div className="MovieCarosel">
      <Swiper
        onReachEnd={() => {
          loadMoreMovies();
        }}
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {movies.map((movie, index) => {
          const apiImg = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

          return (
            <SwiperSlide
              key={index}
              style={{ width: "220px", height: "320px" }}
            >
              <img src={apiImg} alt="Movie poster" className="images" />
              <div className="info">
                <span>
                  <h6 className="titles">{movie.title}</h6>
                  <p className="vote">
                    {movie.vote_average}
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e7d036" }}
                      className="star"
                    />
                  </p>
                </span>
                <LoveButton movie={movie} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
