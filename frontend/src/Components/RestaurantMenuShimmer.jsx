import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

import React from "react";

const RestaurantMenuShimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap flex-col justify-center items-center">
      <ShimmerThumbnail className="shimmer-shadow" height={210} width={450} />

      {[...Array(8)].map((_, index) => (
        <ShimmerThumbnail className="shimmer-shadow" height={55} width={800} />
      ))}
    </div>
  );
};

export default RestaurantMenuShimmer;
