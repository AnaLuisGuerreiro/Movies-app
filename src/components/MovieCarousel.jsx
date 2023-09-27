import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import LoveButton from "./LoveButton";
import "../styles/MovieCarousel.css";

export default function MovieCarousel() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadMovies = (page) => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=f88a88c56f80363e3e2757e7a1a6f5a0&page=${page}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const newMovies = data.results;
        const newTotalPages = data.total_pages;

        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setCurrentPage(page);
        setTotalPages(newTotalPages);
      });
  };

  useEffect(() => {
    loadMovies(1); // Load first movies page
  }, []);

  const loadMoreMovies = () => {
    // Check if it's the last movie of the list
    if (currentPage < totalPages) {
      loadMovies(currentPage + 1); // Load de next movies page
    }
  };

  return (
    <div className="MovieCarousel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        onReachEnd={loadMoreMovies}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={10}
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
