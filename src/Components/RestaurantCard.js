import { IMG_CDN_URL } from "../constants";
import { IoMdStar } from "react-icons/io";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="w-[240px] h-[42vh] rounded-sm bg-shadow cursor-pointer hover:scale-105 duration-200 bg-[#373737] m-2 p-2">
      <img
        className="h-40 rounded-sm text-center"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-center font-bold text-base text-white">{name}</h3>
      <h5 className="text-teal-500 text-center text-sm font-semibold">
        {cuisines.join(", ")}
      </h5>
      <h5 className="text-center font-bold text-cyan-600 text-sm">
        {areaName}
      </h5>
      <span className="flex justify-center gap-2 mt-1">
        {avgRatingString > 4 ? (
          <>
            {avgRatingString > 4.5 ? (
              <>
                {" "}
                <p className="bg-green-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                  {avgRatingString}
                  <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
                </p>{" "}
              </>
            ) : (
              <>
                {" "}
                <p className="bg-yellow-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                  {avgRatingString}
                  <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
                </p>
              </>
            )}
          </>
        ) : (
          <>
            <p className="bg-red-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
              {avgRatingString}
              <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
            </p>
          </>
        )}
        <p className="bg-purple-500 text-white font-bold rounded-sm px-1 text-sm">
          {sla?.lastMileTravelString ?? "2.0 km"}
        </p>
        <p className="bg-pink-600 rounded-sm font-bold text-white px-1 text-sm">
          {costForTwo ?? "₹200 for two"}
        </p>
      </span>
    </div>
  );
};

export default RestaurantCard;

