import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Movie {
  id: string;
  director: string;
  title: string;
  tagLine: string;
  imageLink: string;
  audioLink: string;
  rating: string;
  releaseYear: string;
  type: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  movieDescription: string;
}

interface MovieStore {
  movie: Movie | null;
  setMovie: (data: Movie) => void;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set) => ({
      movie: null,
      setMovie: (data) => set(() => ({ movie: data })),
    }),
    { name: "movie" },
  ),
);
