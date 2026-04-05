"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Movie } from "@/zustand/movieStore";
import MovieCard from "../global/MovieCard";

interface MoviesProps {
  movies: Movie[];
}

const Movies = ({ movies }: MoviesProps) => {
  const swiperSettings = {
    spaceBetween: 20,
    slidesPerView: 2.3,
    loop: true,
    breakpoints: {
      560: {
        slidesPerView: 3.3,
      },
      980: {
        slidesPerView: 4.3,
      },
      1200: {
        slidesPerView: 5.3,
      },
      1300: {
        slidesPerView: 6.3,
      },
      1600: {
        slidesPerView: 7.3,
      },
    },
  };

  return (
    <Swiper {...swiperSettings} className="movies__list">
      {movies
        ? movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};

export default Movies;
