import React from "react";
import foodlogo from "../Images/logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const theme = useSelector((store) => store.item.theme);

  return (
    <div
      className={`flex justify-between px-10 items-center border-2 bg-shadow ${
        theme ? "bg-[#373737]" : "bg-white"
      }`}
    >
      <div className=" flex items-center">
        <img className="w-28" src={foodlogo} alt="" />
        <h3
          className={`text-2xl font-bold -ml-2 ${
            theme ? "text-white" : "text-[#373737]"
          }`}
        >
          Food <span className="text-[#B22126]">Villa</span>{" "}
        </h3>
      </div>
      <ul className="flex gap-2 font-bold relative z-50">
        <li className="bg-[#B22126] px-2 py-[2px] text-white rounded-sm hover:bg-[#a31b1f]">
          <Link to="/">Home</Link>
        </li>
        <li
          className={`px-2 py-[2px] rounded-sm ${
            theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
          }`}
        >
          <Link to="/cart">Cart</Link>
        </li>
        <li
          className={`px-2 py-[2px] rounded-sm ${
            theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
          }`}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className={`px-2 py-[2px] rounded-sm ${
            theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
          }`}
        >
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
