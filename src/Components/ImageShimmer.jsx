import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

import React from "react";

const ImageShimmer = () => {
  return (
    <div className="shimmer-container  flex flex-wrap justify-center items-center">
      {[...Array(1)].map((_, index) => (
        <div key={index} className="shimmer-cards m-2 bg-shadow">
          <ShimmerThumbnail height={100} width={170} />
        </div>
      ))}
    </div>
  );
};

export default ImageShimmer;
