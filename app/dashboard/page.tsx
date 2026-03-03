import Movies from "@/components/dashboard/Movies";
import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";

import "swiper/css";
import "swiper/css/navigation";
import "../globals.css";
import "./page.css";

const fetchSelectedMovies = async () => {
  const response = await fetch(
    "https://advanced-internship-api-production.up.railway.app/selectedMovies",
  );
  const data = await response.json();
  return data.data;
};

const fetchTopMovies = async () => {
  const response = await fetch(
    "https://advanced-internship-api-production.up.railway.app/topMovies",
  );
  const data = await response.json();
  return data.data;
};

const Page = async () => {
  const selectedMovies = await fetchSelectedMovies();
  const topMovies = await fetchTopMovies();

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

            <Movies movies={selectedMovies} />
          </div>
        </section>

        <section className="movies">
          <div className="page-row">
            <h2 className="movies__title">Top Movies</h2>

            <span className="movies__subtext">
              Enjoy our highest rated films.
            </span>

            <Movies movies={topMovies} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
