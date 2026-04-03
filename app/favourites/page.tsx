import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";

import "./page.css"

const Page = () => {
  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <div className="page-row">
          <header className="header">
            <h1 className="favourites__title">Saved Movies</h1>
            <span className="favourites__subtext">0 Movies</span>
          </header>
        </div>

        <section className="favourites">
          <div className="page-row">
            <div className="favourites__empty">
              <strong>Save your favourite movies!</strong>
              <span>When you save a movie, it will appear here.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
