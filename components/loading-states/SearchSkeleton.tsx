import Skeleton from "./Skeleton";

const SearchSkeleton = () => {
  return (
    <div className="searchbar__results__movie">
      <div className="searchbar__results__movie__poster">
        <Skeleton width={56} height={84} borderRadius={4} />
      </div>

      <div className="searchbar__results__movie__info">
        <span className="searchbar__results__movie__info__title">
          <Skeleton width={100} height={16} borderRadius={4} />
        </span>

        <span className="searchbar__results__movie__info__director">
          <Skeleton width={80} height={16} borderRadius={4} />
        </span>

        <span className="searchbar__results__movie__info__duration">
          <Skeleton width={60} height={16} borderRadius={4} />
        </span>
      </div>
    </div>
  );
};

export default SearchSkeleton;
