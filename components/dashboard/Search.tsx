"use client";

import { Menu, SearchIcon } from "lucide-react";

const Search = () => {
  const openNav = () => {
    document.body.classList.add("nav-open");
  };

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
          />
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="open-nav"
          onClick={openNav}
        >
          <Menu />
        </button>
      </div>
    </div>
  );
};

export default Search;
