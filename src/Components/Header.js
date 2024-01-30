import React from "react";
import foodlogo from "../Images/logo.png";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between px-10 items-center border-2 bg-shadow">
      <div className=" flex items-center">
        <img className="w-28" src={foodlogo} alt="" />
        <h3 className="text-[#373737] text-2xl font-bold -ml-2">
          Food <span className="text-[#B22126]">Villa</span>{" "}
        </h3>
      </div>
      <ul className="flex gap-2 font-bold">
        <li>Home</li>
        <li>Contact</li>
        <li>Cart</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Header;
