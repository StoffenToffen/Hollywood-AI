import MovieCarousel from "@/components/dashboard/MovieCarousel";
import Nav from "@/components/global/Nav";
import Search from "@/components/global/Search";

import "./page.css";

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

            <MovieCarousel movieParams="selectedMovies" />
          </div>
        </section>

        <section className="movies">
          <div className="page-row">
            <h2 className="movies__title">Top Movies</h2>

            <span className="movies__subtext">
              Enjoy our highest rated films.
            </span>

            <MovieCarousel movieParams="topMovies" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
