import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useResData from "../Hooks/useResData";
import { FiSearch } from "react-icons/fi";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Sun } from "../Images/Sun.svg";
import { ReactComponent as Moon } from "../Images/Moon.svg";
import {setTheme} from '../Utils/ItemSlice'

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.item.theme);

  const options = [
    { value: "4", label: "Above 4 star" },
    { value: "4.5", label: "Above 4.5 star" },
    { value: "true", label: "Only veg" },
    { value: "undefined", label: "Only non-veg" },
    { value: "3.0 km", label: "Under 3.0 km" },
    { value: "₹200 for two", label: "₹200 for two" },
    { value: "reset", label: "Reset Filter" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    const filteredData = allRestaurants.filter((res) => {
      switch (selectedOption.label) {
        case "Only veg":
        case "Only non-veg":
          return String(res.info.veg) === selectedOption.value;
        case "Above 4 star":
        case "Above 4.5 star":
          return res.info.avgRating > selectedOption.value;
        case "Under 3.0 km":
          return res.info.sla.lastMileTravelString < selectedOption.value;
        case "₹200 for two":
          return res.info.costForTwo === selectedOption.value;
      }
    });

    if (selectedOption.value == "reset") {
      setFilteredRestaurants(allRestaurants);
      setSelectedOption("");
      return;
    }

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

  const handleTheme = () => {
    dispatch(setTheme());
  };


  if (!allRestaurants) return <Shimmer />;

  return (
    <div className={`min-h-screen ${theme ? "bg-white" : "bg-[#373737]"}`}>
      <div className="flex items-center justify-center  relative -top-[54px] ">
        <input
          type="text"
          className="border-y-2 border-l-2 font-bold border-[#B22126] px-2 py-1 rounded-l-sm w-[20vw] focus:outline-none"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="flex gap-1 items-center text-base bg-[#B22126] rounded-sm text-white py-[6px] px-1 rounded-r-sm font-bold">
          <button
            onClick={() => {
              searchData(searchText, allRestaurants);
            }}
          >
            Search
          </button>
          <FiSearch className="text-lg" />
        </div>
        <label
          className={`mr-2 ml-10 text-xl ${
            theme ? "text-white" : "text-[#373737]"
          }`}
        >
          Filter <span className="text-[#B22126]">by :</span>{" "}
        </label>
        <Select
          options={options}
          value={selectedOption}
          onChange={handleChange}
          className="min-w-40 border-2 text-center rounded-md bg-black border-[#B22126]"
        />
        <div className="dark_mode">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={handleTheme}
          />
          <label className="dark_mode_label" for="darkmode-toggle">
            <Sun />
            <Moon />
          </label>
        </div>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap items-center justify-center -mt-8">
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
