import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useResData from "../Hooks/useResData";
import { FiSearch } from "react-icons/fi";
import Select from "react-select";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);

  const options = [
    { value: "4", label: "Above 4 star" },
    { value: "4.5", label: "Above 4.5 star" },
    { value: "3.0 km", label: "Under 3.0 km" },
    { value: "5.0 km", label: "Under  5.0 km" },
    { value: "true", label: "veg" },
    { value: "false", label: "non-veg" },
    { value: "₹200 for two", label: "₹200 for two" },
    { value: "₹300 for two", label: "₹300 for two" },
    { value: "₹400 for two", label: "₹400 for two" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    const filteredData = allRestaurants.filter((res) => {
      console.log(res.info.veg);
      console.log(selectedOption.value);
      return (
        // res.info.avgRating > selectedOption.value ||
        // res.info.costForTwo == selectedOption.value ||
        // res.info.sla.lastMileTravelString < selectedOption.value ||

        res.info.veg == selectedOption.value
      );
    });
    console.log(filteredData);
    setFilteredRestaurants(filteredData);
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
    <div className="min-h-screen">
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
        <Select
          options={options}
          value={selectedOption}
          onChange={handleChange}
          className="min-w-40 border-2 text-center rounded-md bg-black border-[#B22126]"
        />
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap items-center justify-center self-stretch -mt-8">
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
