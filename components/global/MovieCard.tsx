"use client";

import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/zustand/movieStore";
import { useUserStore } from "@/zustand/userStore";
import AudioDuration from "../global/AudioDuration";

import "./MovieCard.css";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const isSubscribed = useUserStore((state) => state.isSubscribed);

  return (
    <Link href={`/movie/${movie.id}`} className="movie">
      {movie.subscriptionRequired && !isSubscribed && (
        <span className="movie__pill">Premium</span>
      )}

      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={movie.imageLink}
        alt={movie.title}
        className="movie__img"
      />

      <h3 className="movie__title">{movie.title}</h3>

      <span className="movie__director">{movie.director}</span>

      <div className="movie__details">
        <Clock className="movie__details__icon" />
        <AudioDuration audioLink={movie.audioLink} />

        <Star className="movie__details__icon" />
        <span>{movie.rating}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
