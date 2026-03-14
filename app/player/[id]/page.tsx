"use client";

import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";
import AudioPlayer from "@/components/player/AudioPlayer";
import { useMovieStore } from "@/zustand/movieStore";

import "./page.css";

const Page = () => {
  const movie = useMovieStore((state) => state.movie);

  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        {movie && (
          <>
            <div className="page-row summary__row">
              <h1 className="summary__title">{movie.title}</h1>

              <p className="summary__text">{movie.summary}</p>
            </div>

            <AudioPlayer movie={movie} />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
