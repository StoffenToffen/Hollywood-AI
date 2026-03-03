import Movies from "@/components/dashboard/Movies";
import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";

import "swiper/css";
import "swiper/css/navigation";
import "../globals.css";
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

            <Movies />
          </div>
        </section>

        <section className="movies">
          <div className="page-row">
            <h2 className="movies__title">Top Movies</h2>

            <span className="movies__subtext">
              Enjoy our highest rated films.
            </span>

            <Movies />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
