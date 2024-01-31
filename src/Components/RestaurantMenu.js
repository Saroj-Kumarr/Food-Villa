import { useParams } from "react-router-dom";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";
import useResMenuData from "../Hooks/useResMenuData";
import { IoMdStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  {
    /*
    IMG_CDN_URL + restaurant?.cloudinaryImageId
    restaurant?.name
    restaurant?.name
    restaurant?.cuisines?.join(", ")
    restaurant?.avgRating
    restaurant?.sla?.slaString
    restaurant?.costForTwoMessage
    menuItems.length
      item?.id
      item?.name
      item?.price 
       item?.description
        item?.imageId
        item?.name
    */
  }

  return !restaurant ? (
    ""
  ) : (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-[#373737] text-white overflow-y-hidden">
        <div className="flex gap-1 items-center">
          <img
            className="h-48 rounded-sm"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">{restaurant?.name}</h2>
            <p className="text-teal-500 font-bold">
              {restaurant?.cuisines?.join(", ")}
            </p>
            <div className="flex gap-3 mt-1">
              <div>
                {restaurant?.avgRating > 4 ? (
                  <>
                    {restaurant?.avgRating > 4.5 ? (
                      <>
                        {" "}
                        <p className="bg-green-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                          {restaurant?.avgRating}
                          <IoMdStar className="inline -mt-[3px] " />
                        </p>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <p className="bg-yellow-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                          {restaurant?.avgRating}
                          <IoMdStar className="inline -mt-[3px]" />
                        </p>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <p className="bg-red-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                      {restaurant?.avgRating}
                      <IoMdStar className="inline -mt-[3px]" />
                    </p>
                  </>
                )}
              </div>

              <p className="bg-purple-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                {restaurant?.sla?.slaString}
              </p>

              <p className="bg-pink-500 text-white px-1 py-[1px] rounded-sm font-bold text-sm">
                {restaurant?.costForTwoMessage}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className=" flex flex-col items-center">
          <div className="w-8/12 flex gap-1 mt-2 justify-center items-center  p-1 rounded-sm">
            <h3 className="font-bold text-base ">Recommended</h3>
            <p className="font-bold text-[#B22126]">{menuItems.length} ITEMS</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-7/12">
              {menuItems.map((item) => (
                <div
                  className="flex bg-shadow gap-1 mt-3 rounded-sm bg-[#373737] h-36"
                  key={item?.id}
                >
                  <img
                    className=""
                    src={IMG_CDN_URL + item?.imageId}
                    alt={item?.name}
                  />
                  <div>
                    <h3 className="text-white text-lg">{item?.name}</h3>
                    <h4 className="text-teal-500 mt-1 ">
                      <FaRupeeSign className="inline -mr-1 -mt-[1px]" />{" "}
                      {item?.price / 100}
                    </h4>
                    <h4 className="leading-4 mt-1 text-slate-400">
                      {item?.description}
                    </h4>
                    <div className="flex gap-2 mt-1">
                      <button className="bg-shadow px-2 py-[2px] rounded-sm duration-200 hover:bg-green-600 bg-green-500 text-white font-bold">
                        Add <FaPlusSquare className="inline -mt-[2px]" />
                      </button>
                      <button className="bg-shadow px-2 py-[2px] rounded-sm duration-200 hover:bg-red-600 bg-red-500 text-white font-bold">
                        Delete <FaMinusSquare className="inline -mt-[2px]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
