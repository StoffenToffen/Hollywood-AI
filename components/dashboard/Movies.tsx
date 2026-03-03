"use client";

import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Movies = () => {
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
      {new Array(10).fill(null).map((_, i) => (
        <SwiperSlide key={i}>
          <Link href="#" className="movie">
            <span className="movie__pill">Premium</span>

            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/assets/movie-poster.jpg"
              alt="movie title"
              className="movie__img"
            />

            <h3 className="movie__title">Avatar</h3>

            <span className="movie__director">James Cameron</span>

            <div className="movie__details">
              <Clock className="movie__details__icon" />
              <span>10:00</span>

              <Star className="movie__details__icon" />
              <span>7.9</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Movies;
