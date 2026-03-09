import { Calendar, Clock, Mic, Star } from "lucide-react";
import Image from "next/image";

import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";
import Buttons from "@/components/movie-details/Buttons";

import "./page.css";

const fetchMovie = async (id: string) => {
  try {
    const response = await fetch(
      `https://advanced-internship-api-production.up.railway.app/Movies/${id}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const movie = await fetchMovie(id);

  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <div className="page-row movie-info__row">
          <section className="movie-info">
            <h1 className="movie-info__title">{movie.title}</h1>

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
                  <Clock className="movie-info__info__item__icon" /> 10:00
                </div>

                <div className="movie-info__info__item">
                  <Calendar className="movie-info__info__item__icon" />
                  {movie.releaseYear}
                </div>
              </div>
            </div>

            <Buttons id={id} />

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
