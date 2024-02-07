import { IMG_CDN_URL } from "../constants";
import { IoMdStar } from "react-icons/io";
import { LiaDotCircle } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.item.theme);
  return (
    <div
      className={`w-[260px] min-h-[45vh] rounded-sm bg-shadow cursor-pointer hover:scale-105 duration-200  m-2 relative p-2 ${
        theme ? "bg-[#373737]" : "bg-white"
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
      <span className="text-white absolute bottom-0 w-[94%]">
        {veg ? (
          <p className="bg-green-500 text-center">veg</p>
        ) : (
          <p className="bg-[#B22126] text-center">nog-veg</p>
        )}
      </span>

      <div className="flex absolute top-0 right-0 justify-center items-center mt-2">
        {avgRatingString > 4 ? (
          <>
            {avgRatingString > 4.5 ? (
              <>
                {" "}
                <p className="bg-green-500 font-semibold text-center text-white px-1 py-[1px] rounded-sm text-sm ">
                  {avgRatingString}
                  <IoMdStar className="inline -mt-[4px] text-base" />
                </p>{" "}
              </>
            ) : (
              <>
                {" "}
                <p className="bg-yellow-500 font-semibold text-center text-white px-1 py-[1px] rounded-sm text-sm">
                  {avgRatingString}
                  <IoMdStar className="inline -mt-[5px] -ml-[2px]" />
                </p>
              </>
            )}
          </>
        ) : (
          <>
            <p className="bg-red-500 font-semibold text-center text-white px-1 py-[1px] rounded-sm text-sm">
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
