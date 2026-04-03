"use client";

import { doc, getDoc } from "firebase/firestore";
import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AudioDuration from "@/components/dashboard/AudioDuration";
import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";
import { db } from "@/firebase";
import type { Movie } from "@/zustand/movieStore";
import { useUserStore } from "@/zustand/userStore";

import "./page.css";
import "../dashboard/page.css";
import { useModalStore } from "@/zustand/modalStore";

const Page = () => {
  const [favourites, setFavourites] = useState<string[]>([]);
  const [favouriteMovies, setFavouriteMovies] = useState<Movie[]>([]);

  const uid = useUserStore((state) => state.uid);
  const isSubscribed = useUserStore((state) => state.isSubscribed);
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);

  useEffect(() => {
    if (!uid) {
      setFavourites([]);
      return;
    }

    (async () => {
      try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFavourites(docSnap.data().favourites);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [uid]);

  useEffect(() => {
    if (favourites.length < 1) {
      setFavouriteMovies([]);
      return;
    }

    (async () => {
      try {
        const promises = favourites.map((favourite) =>
          fetch(
            `https://advanced-internship-api-production.up.railway.app/Movies/${favourite}`,
          ).then((response) => response.json()),
        );

        const data = await Promise.all(promises);

        setFavouriteMovies(data.map((item) => item.data));
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  }, [favourites]);

  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <div className="page-row">
          <header className="header">
            <h1 className="favourites__title">Saved Movies</h1>
            <span className="favourites__subtext">
              {favouriteMovies.length} Movies
            </span>
          </header>
        </div>

        <section className="favourites">
          <div className="page-row">
            {!uid ? (
              <div className="favourites__row">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/assets/login.webp"
                  alt="person in front of a computer"
                  className="favourites__img"
                />

                <span className="favourites__text">
                  Sign in to see your favourited movies
                </span>

                <button
                  type="button"
                  className="favourites__btn"
                  onClick={toggleLoginModal}
                >
                  Login
                </button>
              </div>
            ) : favouriteMovies.length > 0 ? (
              <div className="favourites__movies">
                {favouriteMovies.map(
                  ({
                    id,
                    subscriptionRequired,
                    director,
                    title,
                    rating,
                    imageLink,
                    audioLink,
                  }) => (
                    <Link
                      key={id}
                      href={`/movie/${id}`}
                      className="movie favourites__movie"
                    >
                      {subscriptionRequired && !isSubscribed && (
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
                  ),
                )}
              </div>
            ) : (
              <div className="favourites__empty">
                <strong>Save your favourite movies!</strong>
                <span>When you save a movie, it will appear here.</span>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
