import { useNavigate, useParams } from "react-router";
import useRestaurantMenu from "../../hooks/useResMenuData";
import RestaurantCategories from "./RestaurantCategories";
import { IMG_CDN_URL } from "../../config/constants";
import { IoMdStar } from "react-icons/io";
import { useSelector } from "react-redux";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useEffect } from "react";
import vegImage from "../../assets/veg.png";
import nonVeg from "../../assets/non-veg.png";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const theme = useSelector((store) => store.item.theme);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("isLogin")) {
      navigate("/");
    }
  }, []);

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <RestaurantMenuShimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    aggregatedDiscountInfo,
    areaName,
    veg,
    sla,
    avgRating,
    cloudinaryImageId,
  } = resInfo.cards[2].card.card.info;

  const { header, shortDescriptionList } = aggregatedDiscountInfo || {};

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div className={` ${theme ? "bg-black" : "bg-white"}`}>
      <div className="flex flex-col min-h-screen">
        <div
          className={`flex  justify-center items-center text-white ${
            theme ? "border-b-2" : "border-b-2 border-black"
          }`}
        >
          <div className="flex gap-1 items-center ">
            <div className="relative">
              <img
                className="h-48 w-80 rounded-sm object-cover brightness-75"
                src={IMG_CDN_URL + cloudinaryImageId}
                alt={name}
              />
              <div className="flex absolute top-0 left-0 gap-1 z-40">
                <div className="bg-green-500 px-2 py-[2px]">
                  {header && header}
                </div>
              </div>
              {shortDescriptionList && (
                <p className="absolute bottom-0 text-center w-full text-center text-yellow-400 font-semibold bg-gradient-to-t from-gray-700 to-transparent">
                  {shortDescriptionList[0].meta}
                </p>
              )}
              <div className="absolute top-0 right-0">
                {avgRating > 4.5 ? (
                  <p className="bg-green-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                    {avgRating}
                    <IoMdStar className="inline -mt-[3px]" />
                  </p>
                ) : avgRating > 4 ? (
                  <p className="bg-yellow-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                    {avgRating}
                    <IoMdStar className="inline -mt-[3px]" />
                  </p>
                ) : (
                  <p className="bg-red-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                    {avgRating}
                    <IoMdStar className="inline -mt-[3px]" />
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <h2
                className={`text-2xl font-bold ${
                  theme ? "text-white" : "text-[#373737]"
                }`}
              >
                {name}
              </h2>
              <h2
                className={`text- font-bold ${
                  theme ? "text-white" : "text-[#373737]"
                }`}
              >
                {areaName}
              </h2>
              <p className="text-teal-500 font-bold">{cuisines?.join(", ")}</p>
              <div className="flex gap-3 mt-1 ">
                <p className="bg-pink-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                  {costForTwoMessage}
                </p>
              </div>
              <div
                className={` text-xs items-center font-semibold flex gap-2 mt-1 ${
                  !theme ? "text-black" : "text-white"
                }`}
              >
                <p>{sla.slaString}</p>
                <p
                  className={`w-1 h-1 rounded-full ${
                    !theme ? "bg-black" : "bg-white"
                  }`}
                ></p>
                <p>{sla.lastMileTravelString}</p>
              </div>
              {veg ? (
                <img className="w-8 relative top-2" src={vegImage} alt="veg" />
              ) : (
                <img className="w-8 relative top-2" src={nonVeg} alt="veg" />
              )}
            </div>
          </div>
        </div>

        {categories.map((category) => {
          return <RestaurantCategories data={category.card.card} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
