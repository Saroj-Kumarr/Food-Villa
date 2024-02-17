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
      className={`w-[260px] min-h-[45vh] rounded-sm bg-shadow cursor-pointer duration-200 hover:scale-105  m-2 relative p-2 ${
        theme ? "bg-[#373737] card-shadow" : "bg-white card-shadow-black"
      }`}
    >
      <img
        className="w-full h-40 rounded-sm text-center"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-center font-bold text-base text-white bg-yellow-600">
        {name}
      </h3>
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
      <div className="flex justify-center gap-3 items-center">
        <p className="font-bold text-yellow-500">{header}</p>
        <p className="font-bold  text-yellow-500">{subHeader}</p>
      </div>

      {discountTag && (
        <p className="font-bold absolute top-2 left-2  bg-green-500 px-1 py-1 text-white">
          {discountTag}
        </p>
      )}

      <span className="text-white absolute bottom-0 w-[94%]">
        {veg ? (
          <p className="bg-green-500 text-center mb-1 rounded-sm">veg</p>
        ) : (
          <p className="bg-[#B22126] text-center mb-1 rounded-sm">nog-veg</p>
        )}
      </span>

      <div className="flex absolute top-0 right-0 justify-center items-center mt-2">
        {avgRatingString > 4.5 ? (
          <p className="bg-green-500 font-semibold text-center text-white px-1 py-[1px] rounded-sm text-sm ">
            {avgRatingString}
            <IoMdStar className="inline -mt-[4px] text-base" />
          </p>
        ) : avgRatingString > 4 ? (
          <p className="bg-yellow-500 font-semibold text-center text-white px-1 py-[1px] rounded-sm text-sm">
            {avgRatingString}
            <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
          </p>
        ) : (
          <p className="bg-red-500 font-semibold text-center text-white px-1 py-[1px] rounded-sm text-sm">
            {avgRatingString}
            <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
