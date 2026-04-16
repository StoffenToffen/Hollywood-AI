import Skeleton from "./Skeleton";

const MovieSkeleton = () => {
  return (
    <>
      <section className="movie-info" aria-hidden="true">
        <div className="movie-info__title">
          <Skeleton width={200} height={40} borderRadius={8} />
        </div>

        <span className="movie-info__director">
          <Skeleton width={120} height={20} borderRadius={4} />
        </span>

        <div className="movie-info__info">
          <div
            className="movie-info__info__item__wrapper"
            style={{ gap: "8px" }}
          >
            <div className="movie-info__info__item">
              <Skeleton width={100} height={20} borderRadius={4} />
            </div>

            <div className="movie-info__info__item">
              <Skeleton width={100} height={20} borderRadius={4} />
            </div>
          </div>

          <div
            className="movie-info__info__item__wrapper"
            style={{ gap: "8px" }}
          >
            <div className="movie-info__info__item">
              <Skeleton width={100} height={20} borderRadius={4} />
            </div>

            <div className="movie-info__info__item">
              <Skeleton width={100} height={20} borderRadius={4} />
            </div>
          </div>
        </div>

        <div>
          <Skeleton width={240} height={40} borderRadius={4} />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <Skeleton width={160} height={40} borderRadius={4} />
        </div>

        <div className="movie-info__subtitle">
          <Skeleton width={100} height={20} borderRadius={4} />
        </div>

        <ul className="movie-info__tags">
          <li>
            <Skeleton width={100} height={40} borderRadius={4} />
          </li>
          <li>
            <Skeleton width={100} height={40} borderRadius={4} />
          </li>
          <li>
            <Skeleton width={100} height={40} borderRadius={4} />
          </li>
        </ul>

        <div>
          <Skeleton width={"100%"} height={20} borderRadius={4} />
        </div>
        <div>
          <Skeleton width={"100%"} height={20} borderRadius={4} />
        </div>
        <div>
          <Skeleton width={"100%"} height={20} borderRadius={4} />
        </div>
        <div>
          <Skeleton width={"80%"} height={20} borderRadius={4} />
        </div>
      </section>

      <div className="movie-info__poster" aria-hidden="true">
        <Skeleton width={200} height={300} borderRadius={8} />
      </div>
    </>
  );
};

export default MovieSkeleton;
