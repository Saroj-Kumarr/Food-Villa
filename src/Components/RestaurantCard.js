import { IMG_CDN_URL } from "../constants";
import { IoMdStar } from "react-icons/io";
import { LiaDotCircle } from "react-icons/lia";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
  isOpen,
  veg,
}) => {
  return (
    <div className="w-[270px] min-h-[45vh] rounded-sm bg-shadow cursor-pointer hover:scale-105 duration-200 bg-[#373737] m-2 p-2 relative">
      <img
        className="w-full h-40 rounded-sm text-center"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-center font-bold text-base text-white bg-[#B22126]">
        {name}
      </h3>
      <h5 className="text-teal-500 text-center text-sm">
        {cuisines.join(", ")}
      </h5>
      <h5 className="text-center text-cyan-600 text-sm">{areaName}</h5>
      <span className="flex justify-center gap-2 mt-1">
        <p className=" text-white text-xs">
          {sla?.lastMileTravelString ?? "2.0 km"}
        </p>
        <LiaDotCircle className="inline text-xs relative top-[3px] text-[#B22126]" />
        <p className="text-white text-xs">{sla.slaString}</p>
        <LiaDotCircle className="inline text-xs relative top-[3px] text-[#B22126]" />
        <p className=" text-white text-xs">{costForTwo ?? "₹200 for two"}</p>
      </span>
      <span className="text-white flex justify-center gap-2 mt-2">
        {isOpen ? (
          <p className="bg-green-500 px-1">open</p>
        ) : (
          <p className="bg-[#B22126] px-1">closed</p>
        )}
        {veg ? (
          <p className="bg-green-500 px-1">veg</p>
        ) : (
          <p className="bg-[#B22126] px-1">nog-veg</p>
        )}
      </span>

      <div className="flex absolute top-0 right-0 justify-center items-center mt-2">
        {avgRatingString > 4 ? (
          <>
            {avgRatingString > 4.5 ? (
              <>
                {" "}
                <p className="bg-green-500 font-bold text-center text-white px-1 py-[1px] rounded-sm text-sm ">
                  {avgRatingString}
                  <IoMdStar className="inline -mt-[4px] text-base" />
                </p>{" "}
              </>
            ) : (
              <>
                {" "}
                <p className="bg-yellow-500 text-white font-bold text-center px-1 py-[1px] rounded-sm  text-sm">
                  {avgRatingString}
                  <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
                </p>
              </>
            )}
          </>
        ) : (
          <>
            <p className="bg-red-500 text-white font-bold text-center px-1 py-[1px] rounded-sm  text-sm">
              {avgRatingString}
              <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
