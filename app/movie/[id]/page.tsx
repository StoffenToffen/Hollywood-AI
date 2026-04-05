import { Calendar, Clock, Mic, Star } from "lucide-react";
import Image from "next/image";

import { fetchData } from "@/app/fetches";
import AudioDuration from "@/components/global/AudioDuration";
import Nav from "@/components/global/Nav";
import Search from "@/components/global/Search";
import Buttons from "@/components/movie-details/Buttons";
import type { Movie } from "@/zustand/movieStore";

import "./page.css";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const movie = await fetchData<Movie>("Movies", id);

  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <div className="page-row movie-info__row">
          <section className="movie-info">
            <h1 className="movie-info__title">
              {movie.title} {movie.subscriptionRequired && "(Premium)"}
            </h1>

            <span className="movie-info__director">{movie.director}</span>

            <div className="movie-info__info">
              <div className="movie-info__info__item__wrapper">
                <div className="movie-info__info__item">
                  <Star className="movie-info__info__item__icon" />{" "}
                  {movie.rating} / 10
                </div>

                <div className="movie-info__info__item">
                  <Mic className="movie-info__info__item__icon" />
                  {movie.type}
                </div>
              </div>

              <div className="movie-info__info__item__wrapper">
                <div className="movie-info__info__item">
                  <Clock className="movie-info__info__item__icon" />{" "}
                  <AudioDuration audioLink={movie.audioLink} />
                </div>

                <div className="movie-info__info__item">
                  <Calendar className="movie-info__info__item__icon" />
                  {movie.releaseYear}
                </div>
              </div>
            </div>

            <Buttons id={id} movie={movie} />

            <h2 className="movie-info__subtitle">What's it about?</h2>

            <ul className="movie-info__tags">
              {movie.tags.map((tag: string) => (
                <li key={tag} className="movie-info__tag">
                  {tag}
                </li>
              ))}
            </ul>

            <p>{movie.movieDescription}</p>
          </section>

          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={movie.imageLink}
            alt={movie.title}
            className="movie-info__poster"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
