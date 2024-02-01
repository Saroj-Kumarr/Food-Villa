import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

import React from "react";

const ImageShimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center items-center">
      {[...Array(1)].map((_, index) => (
        <div key={index} className="shimmer-cards m-2">
          <ShimmerThumbnail height={85} width={140} />
        </div>
      ))}
    </div>
  );
};

export default ImageShimmer;
