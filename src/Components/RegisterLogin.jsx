import React, { useState } from "react";
import tree from "../Images/tree.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import foodbg from "../Images/foodbg2.png";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = async () => {};

  const handleLogin = async () => {};

  return (
    <div className="flex justify-center items-center h-[90vh] bg-[#373737]">
      <div className="flex items-center justify-center flex-col lg:flex-row">
        <img className="" src={foodbg} alt="" />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col text-center pl-5 p-7 mb-1 test rounded-sm lg:mt-12"
        >
          <h1 className="font-bold text-lg relative text-white -top-1">
            {isLogin ? "Login" : "Register"}
          </h1>

          {!isLogin && (
            <div>
              <FaCircleUser className="inline relative left-7 -top-[1px] text-[#B22126]" />
              <input
                onChange={(e) => setName(e.target.value)}
                className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#B22126] "
                type="text"
                placeholder="Enter your name"
                value={name}
              />
            </div>
          )}
          <div className="flex flex-col">
            <div>
              <MdEmail className="inline text-[#B22126]  relative left-7 text-lg -top-[1px]" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#B22126]"
                type="email"
                placeholder="Enter your email"
                value={email}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <FaLock className="inline text-[#B22126] relative left-7 -top-[1px]" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="text-center rounded-sm border-2 p-1 m-1 placeholder-[#1A1A1A] focus:outline-[#B22126] mb-2"
                type="password"
                placeholder="Enter password"
                value={password}
              />
            </div>
          </div>
          {isLogin ? (
            <button
              onClick={() => {
                handleLogin();
                setIsLogin((prev) => !prev);
              }}
              className="p-1 rounded-sm bg-[#B22126] relative left-2 text-white font-bold hover:bg-[#e76854] duration-300"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                handleRegister();
                setIsLogin((prev) => !prev);
              }}
              className="p-1 rounded-sm bg-[#B22126] relative left-2 text-white font-bold hover:bg-[#e76854] duration-300"
            >
              Register
            </button>
          )}
          <p className="font-bold text-white text-sm m-1">
            Already have an account ?
            <span
              onClick={() => setIsLogin((prev) => !prev)}
              className="text-[#B22126] ml-1 cursor-pointer"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
