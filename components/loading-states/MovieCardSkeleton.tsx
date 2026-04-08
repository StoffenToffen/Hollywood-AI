import Skeleton from "./Skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="movie">
      <div className="movie__img">
        <Skeleton width={"100%"} height={"100%"} borderRadius={8} />
      </div>

      <Skeleton width={"100%"} height={12} borderRadius={99} />

      <Skeleton width={"60%"} height={12} borderRadius={99} />

      <Skeleton width={"80%"} height={12} borderRadius={99} />
    </div>
  );
};

export default MovieCardSkeleton;
