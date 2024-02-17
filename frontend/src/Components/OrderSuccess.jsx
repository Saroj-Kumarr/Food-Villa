import React, { useEffect } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import deliveryBoy from "../Images/delivery-boy.gif";
import { FaHandsPraying } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const theme = useSelector((store) => store.item.theme);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("isLogin")) {
      navigate("/");
    }
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-[90vh] ${
        theme ? "bg-[#373737]" : "bg-white"
      }`}
    >
      <div
        className={`order-success p-8 flex flex-col items-center w-6/12 h-8/12 ${
          theme ? "text-white" : "text-[#373737]"
        }`}
      >
        <img className="h-52 -mt-8" src={deliveryBoy} alt="delivery boy" />

        <p className=" text-xl mt-4 flex gap-2 items-center justify-center">
          You order has been placed successfully !{" "}
          <div className="h-4 w-4 rounded-full p-[1px] bg-green-500 flex justify-center items-center ">
            <MdOutlineDownloadDone className="text-white" />
          </div>
        </p>
        <p className=" mt-2">
          Thank you for ordering !{" "}
          <FaHandsPraying className="inline -mt-1 ml-[2px] text-[#F7C19B]" />
        </p>
        <p className=" text-sm text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          libero aliquam voluptate voluptatem ipsum delectus? Incidunt sit
          consectetur fuga animi?
        </p>
        <div className="mt-4 flex justify-between gap-10">
          <Link to="/cart/ordersuccess/orderdetails">
          <button className="bg-green-500 px-2 py-1 rounded-sm text-white hover:bg-green-600 duration-200 shadow-lg">
            View Order Details
          </button>
          </Link>
          <Link to="/body">
            <button className="bg-[#B22126] px-2 py-1 rounded-sm text-white hover:bg-[#7d292c] duration-200 shadow-lg ">
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
