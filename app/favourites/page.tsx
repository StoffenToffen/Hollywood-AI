"use client";

import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import MovieCard from "@/components/global/MovieCard";
import Nav from "@/components/global/Nav";
import Search from "@/components/global/Search";
import { db } from "@/firebase";
import { useModalStore } from "@/zustand/modalStore";
import type { Movie } from "@/zustand/movieStore";
import { useUserStore } from "@/zustand/userStore";
import { fetchData } from "../fetches";

import "./page.css";
import FavouritesSkeleton from "@/components/loading-states/FavouritesSkeleton";

const Page = () => {
  const [favouriteMovies, setFavouriteMovies] = useState<Movie[]>();

  const uid = useUserStore((state) => state.uid);
  const userFetched = useUserStore((state) => state.userFetched);
  const subscribedFetched = useUserStore((state) => state.subscribedFetched);
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);

  useEffect(() => {
    if (!userFetched || !subscribedFetched) return;

    if (!uid) {
      setFavouriteMovies([]);
      return;
    }

    (async () => {
      try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setFavouriteMovies([]);
          return;
        }

        const promises = (docSnap.data().favourites || []).map(
          (favourite: string) => fetchData<Movie>("Movies", favourite),
        );

        const fetchedData = await Promise.allSettled(promises);

        setFavouriteMovies(
          fetchedData
            .filter(
              (result): result is PromiseFulfilledResult<Movie> =>
                result.status === "fulfilled",
            )
            .map((result) => result.value),
        );
      } catch (err) {
        console.error(err);
        setFavouriteMovies([]);
      }
    })();
  }, [userFetched, subscribedFetched, uid]);

  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        {!favouriteMovies ? (
          <FavouritesSkeleton />
        ) : (
          <>
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
                    {favouriteMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </div>
                ) : (
                  <div className="favourites__empty">
                    <strong>Save your favourite movies!</strong>
                    <span>When you save a movie, it will appear here.</span>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
