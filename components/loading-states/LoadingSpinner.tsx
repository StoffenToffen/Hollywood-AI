import { LoaderCircle } from "lucide-react";

import "./LoadingSpinner.css"

const LoadingSpinner = () => {
  return (
    <div className="page-row summary__row">
      <LoaderCircle className="loading"/>
    </div>
  );
};

export default LoadingSpinner;
