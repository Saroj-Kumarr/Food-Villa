import { IMG_CDN_URL } from "../constants";
import { IoMdStar } from "react-icons/io";
import { LiaDotCircle } from "react-icons/lia";
import { useSelector } from "react-redux";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
  veg,
  aggregatedDiscountInfoV3,
}) => {
  const { header, discountTag, subHeader } = aggregatedDiscountInfoV3 || {};

  const theme = useSelector((store) => store.item.theme);
  return (
    <div
      className={`w-[260px] border min-h-[45vh] rounded-sm  cursor-pointer duration-200 hover:scale-105 bg-light-mode-shadow m-2 relative p-2 ${
        theme ? "bg-black " : "bg-white "
      }`}
    >
      <div className="relative">
        <img
          className="w-full h-44 rounded-sm text-center brightness-75 hover:brightness-90 duration-200"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-center absolute bottom-0 text-center text-white w-full font-bold text-base text-xl bg-gradient-to-t from-black to-transparent">
          {name}
        </h3>
      </div>
      <h5 className="text-teal-500 text-center text-sm">
        {cuisines.join(", ")}
      </h5>
      <h5 className="text-center text-cyan-600 text-sm">{areaName}</h5>
      <span className="flex justify-center gap-2 mt-1">
        <p className={`text-xs ${theme ? "text-white" : "text-[#373737]"}`}>
          {sla?.lastMileTravelString ?? "2.0 km"}
        </p>
        <LiaDotCircle className="inline text-xs relative top-[3px] text-[#B22126]" />
        <p className={`text-xs ${theme ? "text-white" : "text-[#373737]"}`}>
          {sla.slaString}
        </p>
        <LiaDotCircle className="inline text-xs relative top-[3px] text-[#B22126]" />
        <p className={`text-xs ${theme ? "text-white" : "text-[#373737]"}`}>
          {costForTwo ?? "₹200 for two"}
        </p>
      </span>
      <div className="flex justify-center items-center">
        <p className="font-bold text-yellow-500">{header}</p>
        <p className="font-bold  text-yellow-500">{subHeader}</p>
      </div>

      {discountTag && (
        <p className="font-bold absolute top-2 left-2  bg-green-500 px-1 py-1 text-white">
          {discountTag}
        </p>
      )}

      <span className="text-black absolute bottom-0 w-[94%]">
        {veg ? (
          <p
            className={`bg-gradient-to-t font-bold from-green-500 to-transparent text-center mb-1 rounded-sm ${
              !theme ? "text-black" : "text-white"
            } `}
          >
            veg
          </p>
        ) : (
          <p
            className={`bg-gradient-to-t font-bold from-[#B22126] to-transparent text-center mb-1 rounded-sm ${
              !theme ? "text-black" : "text-white"
            } `}
          >
            non-veg
          </p>
        )}
      </span>

      <div className="flex absolute top-0 right-2 justify-center items-center mt-2">
        {avgRatingString > 4.5 ? (
          <p className="bg-green-500 font-semibold text-center text-white px-1 py-[2px] rounded-sm text-sm ">
            {avgRatingString}
            <IoMdStar className="inline -mt-[4px] text-base" />
          </p>
        ) : avgRatingString > 4 ? (
          <p className="bg-yellow-500 font-semibold text-center text-white px-1 py-[2px] rounded-sm text-sm">
            {avgRatingString}
            <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
          </p>
        ) : (
          <p className="bg-red-500 font-semibold text-center text-white px-1 py-[2px] rounded-sm text-sm">
            {avgRatingString}
            <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
