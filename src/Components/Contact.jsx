import React, { useEffect } from "react";
import contactImage from "../Images/contactImage.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Contact = () => {
  const theme = useSelector((store) => store.item.theme);
  const navigate = useNavigate();
  const login = useSelector((store) => store.item.login);

  useEffect(() => {
    if (login == false) navigate("/");
  }, []);

  return (
    <div
      className={`h-[81vh] flex justify-center ${
        theme ? "bg-[#373737]" : "bg-white"
      }`}
    >
      <div className="w-7/12 mt-20 ml-20">
        <h1 className="font-bold text-3xl text-center">Contact me</h1>
        <div className="flex items-center mt-2">
          <p className="w-5/12 bg-[#373737] h-[3px]"></p>
          <p className="w-2/12 text-xl text-center font-bold text-[#B22126]">
            Get in touch
          </p>
          <p className="w-5/12 bg-[#373737] h-[3px]"></p>
        </div>
        <div className="flex justify-center items-center mt-2 ">
          <form className=" bg-shadow p-2">
            <h3
              className={` font-bold text-xl ${
                theme ? "text-white" : "text-[#373737]"
              }`}
            >
              Message <span className="text-[#B22126]">me</span>
            </h3>
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <input
                  className="border-2 w-5/12 focus:outline-none border-2  font-semibold text-[#B22126] p-1 rounded-sm focus:border-[#B22126]"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="border-2 w-5/12 focus:outline-none border-2 font-semibold text-[#B22126] p-1 rounded-sm ml-4 focus:border-[#B22126]"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex justify-center items-center flex-col">
                <textarea
                  rows="5"
                  className="border-2 row w-10/12 mt-2 resize-none px-2 font-bold  "
                ></textarea>
                <button className="bg-[#B22126] px-2 py-1 w-10/12 mt-2 rounded-sm text-white font-bold bg-shadow hover:bg-[#921317] duration-200">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-5/12">
        <img src={contactImage} alt="" />
      </div>
    </div>
  );
};

export default Contact;
