import { LoaderCircle } from "lucide-react";

import "./LoadingSpinner.css";

interface LoadingSpinnerProps {
  width: number | string;
  color?: string;
}

const LoadingSpinner = ({ width, color }: LoadingSpinnerProps) => {
  return (
    <div className="loading__wrapper">
      <LoaderCircle
        className="loading"
        style={{
          width,
          color,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
