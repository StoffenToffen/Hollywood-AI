"use client";

import {
  arrayRemove,
  arrayUnion,
  type DocumentData,
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
import { useUserStore } from "@/zustand/userStore";

interface ButtonsProps {
  id: string;
}

const Buttons = ({ id }: ButtonsProps) => {
  const [favourites, setFavourites] = useState([] as DocumentData | undefined);
  const uid = useUserStore((state) => state.uid);
  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);

  const toggleFavourite = async () => {
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
  };

  const getFavourites = useCallback(async () => {
    if (uid) {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      setFavourites(userSnap.data()?.favourites);
    } else setFavourites([]);
  }, [uid]);

  useEffect(() => {
    getFavourites();
  }, [getFavourites]);

  return (
    <>
      {uid ? (
        <Link href={`/player/${id}`} className="movie-info__summarize-btn">
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
