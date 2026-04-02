"use client";

import { Clock, Menu, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounce } from "@/app/hooks";
import type { Movie } from "@/zustand/movieStore";
import AudioDuration from "./AudioDuration";

const Search = () => {
  const [searchInput, setSeachInput] = useState("");
  const [searchResults, setSeachResults] = useState<Movie[]>([]);

  const debounceSearch = useDebounce(searchInput, 300);

  useEffect(() => {
    if (!debounceSearch.trim()) {
      setSeachResults([]);
      return;
    }

    (async (): Promise<void> => {
      try {
        setSeachResults([]);

        const response = await fetch(
          `https://advanced-internship-api-production.up.railway.app/movies?search=${debounceSearch}`,
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.status}`);
        }

        const { data } = await response.json();
        setSeachResults(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [debounceSearch]);

  return (
    <div className="search">
      <div className="page-row search__row">
        <div className="searchbar">
          <SearchIcon className="searchbar__icon" />

          <input
            type="text"
            aria-label="Search for movies"
            placeholder="Search for movies..."
            className="searchbar__input"
            value={searchInput}
            onChange={(e) => setSeachInput(e.target.value)}
          />

          {searchInput && (
            <div className="searchbar__results">
              <h3 className="searchbar__results__title">Search Results</h3>

              {searchResults.length > 0 ? (
                searchResults?.map((movie) => (
                  <Link
                    href={`/movie/${movie.id}`}
                    key={movie.id}
                    className="searchbar__results__movie"
                  >
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={movie.imageLink}
                      alt={movie.title}
                      className="searchbar__results__movie__poster"
                    />

                    <div className="searchbar__results__movie__info">
                      <h4 className="searchbar__results__movie__info__title">
                        {movie.title}
                      </h4>

                      <span className="searchbar__results__movie__info__director">
                        {movie.director}
                      </span>

                      <span className="searchbar__results__movie__info__duration">
                        <Clock className="searchbar__results__movie__info__duration__icon" />{" "}
                        <AudioDuration audioLink={movie.audioLink} />
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="searchbar__results__none">
                  <strong>No results.</strong>
                  <span>Please try again.</span>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="open-nav"
          onClick={() => document.body.classList.add("nav-open")}
        >
          <Menu />
        </button>
      </div>
    </div>
  );
};

export default Search;
