"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchData } from "@/app/fetches";
import type { Movie } from "@/zustand/movieStore";
import MovieCard from "../global/MovieCard";
import MovieCardSkeleton from "../loading-states/MovieCardSkeleton";

import "swiper/css";

interface MovieCarouselProps {
  movieParams: string;
}

const MovieCarousel = ({ movieParams }: MovieCarouselProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const swiperSettings = {
    spaceBetween: 20,
    slidesPerView: 2.3,
    loop: true,
    breakpoints: {
      560: { slidesPerView: 3.3 },
      980: { slidesPerView: 4.3 },
      1200: { slidesPerView: 5.3 },
      1300: { slidesPerView: 6.3 },
      1600: { slidesPerView: 7.3 },
    },
  };

  useEffect(() => {
    fetchData<Movie[]>(movieParams).then(setMovies);
  }, [movieParams]);

  return (
    <Swiper {...swiperSettings} className="movies__list">
      {movies.length > 0
        ? movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))
        : new Array(8).fill(0).map((_, index) => (
            <SwiperSlide key={index}>
              <MovieCardSkeleton />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default MovieCarousel;
