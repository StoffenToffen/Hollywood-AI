import MovieCardSkeleton from "./MovieCardSkeleton";
import Skeleton from "./Skeleton";

const FavouritesSkeleton = () => {
  return (
    <>
      <div className="page-row">
        <header className="header">
          <h1 className="favourites__title">Saved Movies</h1>
          <span className="favourites__subtext">
            <Skeleton width={100} height={20} borderRadius={4} />
          </span>
        </header>
      </div>

      <section className="favourites">
        <div className="page-row">
          <div className="favourites__movies">
            {new Array(7).fill(0).map((_, index) => (
              <MovieCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FavouritesSkeleton;
