"use client";

import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Movie } from "@/zustand/movieStore";
import AudioDuration from "./AudioDuration";

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
        ? movies.map(
            ({
              id,
              subscriptionRequired,
              director,
              title,
              rating,
              imageLink,
              audioLink,
            }) => (
              <SwiperSlide key={id}>
                <Link href={`/movie/${id}`} className="movie">
                  {subscriptionRequired && (
                    <span className="movie__pill">Premium</span>
                  )}

                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={imageLink}
                    alt={title}
                    className="movie__img"
                  />

                  <h3 className="movie__title">{title}</h3>

                  <span className="movie__director">{director}</span>

                  <div className="movie__details">
                    <Clock className="movie__details__icon" />
                    <AudioDuration audioLink={audioLink} />

                    <Star className="movie__details__icon" />
                    <span>{rating}</span>
                  </div>
                </Link>
              </SwiperSlide>
            ),
          )
        : null}
    </Swiper>
  );
};

export default Movies;
