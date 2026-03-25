"use client";

import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { db } from "@/firebase";
import { useModalStore } from "@/zustand/modalStore";
import { type Movie, useMovieStore } from "@/zustand/movieStore";
import { useUserStore } from "@/zustand/userStore";

interface ButtonsProps {
  id: string;
  movie: Movie;
}

const Buttons = ({ id, movie }: ButtonsProps) => {
  const [favourites, setFavourites] = useState<string[]>([]);
  const uid = useUserStore((state) => state.uid);
  const isSubscribed = useUserStore((state) => state.isSubscribed);
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);
  const setMovie = useMovieStore((state) => state.setMovie);

  const toggleFavourite = async () => {
    try {
      const favRef = doc(db, "users", uid);

      if (favourites?.includes(id)) {
        await updateDoc(favRef, {
          favourites: arrayRemove(id),
        });
      } else {
        await updateDoc(favRef, {
          favourites: arrayUnion(id),
        });
      }

      getFavourites();
    } catch (err) {
      console.error("Failed to update favourites:", err);
    }
  };

  const getFavourites = useCallback(async () => {
    if (uid) {
      try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);
        setFavourites(userSnap.data()?.favourites);
      } catch (err) {
        console.error("Failed to fetch favourites:", err);
        setFavourites([]);
      }
    } else setFavourites([]);
  }, [uid]);

  useEffect(() => {
    getFavourites();
  }, [getFavourites]);

  useEffect(() => {
    setMovie(movie);
  }, [setMovie, movie]);

  return (
    <>
      {uid ? (
        <Link
          href={
            movie.subscriptionRequired && !isSubscribed
              ? "/plans"
              : `/player/${id}`
          }
          className="movie-info__summarize-btn"
        >
          Summarize{" "}
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/bolt.svg"
            alt="lightning bolt"
            className="movie-info__summarize-btn__icon"
          />
        </Link>
      ) : (
        <button
          type="button"
          className="movie-info__summarize-btn"
          onClick={toggleLoginModal}
        >
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
      )}

      <button
        type="button"
        className="movie-info__favourite-btn"
        onClick={() => {
          uid ? toggleFavourite() : toggleLoginModal();
        }}
      >
        <Bookmark
          fill={favourites?.includes(id) ? "currentColor" : "none"}
          className="movie-info__favourite-btn__icon"
        />{" "}
        Add to Favourites
      </button>
    </>
  );
};

export default Buttons;
