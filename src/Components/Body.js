import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useResData from "../Hooks/useResData";
import { FiSearch } from "react-icons/fi";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const handleSelectChange = (e) => {
    // Handle the select box change here
    console.log("Selected value:", e.target.value);
  };

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants) return <Shimmer />;

  return (
    <div className="-">
      <div className="flex items-center justify-center  relative -top-[54px]">
        <input
          type="text"
          className="border-y-2 border-l-2 font-bold border-[#B22126] px-2 py-1 rounded-l-sm w-[20vw] focus:outline-none"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="flex gap-1 items-center text-base bg-[#373737] rounded-sm text-white py-[6px] px-1 rounded-r-sm font-bold">
          <button
            onClick={() => {
              searchData(searchText, allRestaurants);
            }}
          >
            Search
          </button>
          <FiSearch className="text-lg" />
        </div>
        <label className="mr-2 ml-10 text-xl">
          Filter <span className="text-[#B22126]">by :</span>{" "}
        </label>
        <select
          className=" bg-[#B22126] text-white px-4 py-[6px] rounded-sm bg-shadow w-32 text-center leading-tight focus:outline-none focus:shadow-outline font-bold"
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap items-center justify-around self-stretch -mt-8">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
