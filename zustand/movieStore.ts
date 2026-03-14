import { create } from "zustand";

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
  movie: Movie;
  setMovie: (data: Movie) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movie: {
    id: "",
    director: "",
    title: "",
    tagLine: "",
    imageLink: "",
    audioLink: "",
    rating: "",
    releaseYear: "",
    type: "",
    subscriptionRequired: false,
    summary: "",
    tags: [],
    movieDescription: "",
  },
  setMovie: (data) => set(() => ({ movie: data })),
}));
