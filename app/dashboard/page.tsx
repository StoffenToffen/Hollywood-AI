import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/dashboard/Nav";

import "../globals.css";
import "./page.css";
import Search from "@/components/dashboard/Search";

const Page = () => {
  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <header className="header">
          <div className="page-row">
            <h1 className="header__title">AI Movie Summariser</h1>

            <span className="header__subtext">
              Enjoy high-quality summaries of your favourite movies instantly
              without breaking a sweat.
            </span>
          </div>
        </header>

        <section className="movies">
          <div className="page-row">
            <h2 className="movies__title">Selected just for you</h2>

            <span className="movies__subtext">We think you'll like these.</span>

            <div className="movies__list">
              {new Array(7).fill(null).map((_, i) => (
                <Link href="#" key={i} className="movie">
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
              ))}
            </div>
          </div>
        </section>

        <section className="movies">
          <div className="page-row">
            <h2 className="movies__title">Top Movies</h2>

            <span className="movies__subtext">
              Enjoy our highest rated films.
            </span>

            <div className="movies__list">
              {new Array(7).fill(null).map((_, i) => (
                <Link href="#" key={i} className="movie">
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
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
