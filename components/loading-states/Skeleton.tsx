import "./Skeleton.css";

interface SkeletonProps {
  width: number | string;
  height: number | string;
  borderRadius?: number;
}

const Skeleton = ({ width, height, borderRadius }: SkeletonProps) => {
  return (
    <div
      className="skeleton"
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
