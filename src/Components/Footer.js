import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Github_URL } from "../constants";
import { IoIosHeart } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-1 text-[#373737] h-16 text-base font-semibold bg-shadow">
      <div className="flex items-center relative top-1 gap-1">
        <a
          onClick={() => {
            toast.info("Redirecting to github", {
              position: "top-center",
              theme: "dark",
            });
          }}
          href={Github_URL}
        >
          <FaGithubSquare className="text-xl" />
        </a>
        <FaInstagramSquare className="text-xl" />
        <FaLinkedin className="text-xl" />
      </div>
      <h3 className="">
        || Developed by <IoIosHeart className="inline text-red-600" /> Saroj
        Kumar
      </h3>
    </div>
  );
};

export default Footer;
