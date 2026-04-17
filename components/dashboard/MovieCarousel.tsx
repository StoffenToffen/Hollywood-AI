"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchData } from "@/app/fetches";
import type { Movie } from "@/zustand/movieStore";
import { useUserStore } from "@/zustand/userStore";
import MovieCard from "../global/MovieCard";
import MovieCardSkeleton from "../loading-states/MovieCardSkeleton";

import "swiper/css";

interface MovieCarouselProps {
  movieParams: string;
}

const MovieCarousel = ({ movieParams }: MovieCarouselProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const subscribedFetched = useUserStore((state) => state.subscribedFetched);

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
    if (!subscribedFetched) return;

    fetchData<Movie[]>(movieParams)
      .then(setMovies)
      .catch(() => setMovies([]))
      .finally(() => setIsLoading(false));
  }, [subscribedFetched, movieParams]);

  return (
    <Swiper {...swiperSettings} className="movies__list">
      {isLoading
        ? new Array(8).fill(0).map((_, index) => (
            <SwiperSlide key={index}>
              <MovieCardSkeleton />
            </SwiperSlide>
          ))
        : movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default MovieCarousel;
