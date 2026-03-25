"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";
import AudioPlayer from "@/components/player/AudioPlayer";
import { useMovieStore } from "@/zustand/movieStore";
import { useUserStore } from "@/zustand/userStore";

import "./page.css";

const Page = () => {
  const { id } = useParams();
  const movie = useMovieStore((state) => state.movie);
  const isSubscribed = useUserStore((state) => state.isSubscribed);

  const router = useRouter();

  useEffect(() => {
    if (movie?.subscriptionRequired && !isSubscribed) router.push("/plans");
  }, [isSubscribed, movie, router]);

  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        {movie && movie.id === id ? (
          <>
            <div className="page-row summary__row">
              <h1 className="summary__title">{movie.title}</h1>

              <p className="summary__text">{movie.summary}</p>
            </div>

            <AudioPlayer movie={movie} />
          </>
        ) : (
          <p>Movie not found. Please select a movie from the dashboard</p>
        )}
      </div>
    </div>
  );
};

export default Page;
