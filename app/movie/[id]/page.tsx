import { Bookmark, Calendar, Clock, Mic, Star } from "lucide-react";
import Image from "next/image";

import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";

import "./page.css";

const Page = () => {
  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <div className="page-row movie-info__row">
          <section className="movie-info">
            <h1 className="movie-info__title">Avatar</h1>

            <span className="movie-info__director">James Cameron</span>

            <div className="movie-info__info">
              <div className="movie-info__info__item__wrapper">
                <div className="movie-info__info__item">
                  <Star className="movie-info__info__item__icon" /> 7.9 / 10
                </div>

                <div className="movie-info__info__item">
                  <Mic className="movie-info__info__item__icon" /> Audio & text
                </div>
              </div>

              <div className="movie-info__info__item__wrapper">
                <div className="movie-info__info__item">
                  <Clock className="movie-info__info__item__icon" /> 10:00
                </div>

                <div className="movie-info__info__item">
                  <Calendar className="movie-info__info__item__icon" /> 2009
                </div>
              </div>
            </div>

            <button type="button" className="movie-info__summarize-btn">
              Summarize{" "}
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/assets/bolt.svg"
                alt="lightning bolt"
                className="movie-info__summarize-btn__icon"
              />
            </button>

            <button type="button" className="movie-info__favourite-btn">
              <Bookmark className="movie-info__favourite-btn__icon" /> Add to
              Favourites
            </button>

            <h2 className="movie-info__subtitle">What's it about?</h2>

            <ul className="movie-info__tags">
              <li className="movie-info__tag">Action</li>
              <li className="movie-info__tag">Adventure</li>
              <li className="movie-info__tag">Fantasy</li>
              <li className="movie-info__tag">Sci-Fi</li>
            </ul>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              excepturi architecto totam voluptatum veniam placeat ut tempore
              quae possimus distinctio, id, error laboriosam est veritatis neque
              sit voluptas delectus sint nesciunt fugiat quos! In a eius
              consequatur, adipisci quam optio, suscipit quibusdam excepturi
              modi eveniet dolorum ad beatae ea? Commodi.
            </p>
          </section>

          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/movie-poster.jpg"
            alt="movie title"
            className="movie-info__poster"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
