import React from "react";
import boy from "../Images/boy-removebg-preview.png";

const About = () => {
  return (
    <div className="min-h-[75vh] flex justify-center items-center">
      <div className="w-8/12 flex">
        <div className="w-7/12 text-center flex items-center justify-center -mt-5">
          <div>
            <h3 className="font-bold text-xl">Hii👋</h3>
            <h4 className="font-bold text-3xl">
              I'm <span className="font-bold text-[#B22126]">Saroj Kumar</span>{" "}
            </h4>
            <h5 className="font-bold text-4xl">
              <span className="text-[#178A31]">M</span>
              <span className="text-[#353535]">E</span>
              <span className="text-[#61DBFC]">R</span>
              <span className="text-[#7AB566]">N</span> Stack{" "}
              <span className="text-[#B22126]">Web developer</span>
            </h5>
            <p className="leading-4 mt-2">
              Hello, I'm Saroj Kumar, a Master's in Computer Application student
              from Bihar, currently specializing in MERN stack development at
              Lovely Professional University. With a passion for coding and
              problem-solving, I bring a strong foundation to develop innovative
              web solutions. Eager to collaborate and contribute to meaningful
              projects.
            </p>
            <button className="bg-[#B22126] px-3 py-[3px] text-white rounded-sm hover:bg-[#a31b1f] bg-shadow mt-1">
              Download CV
            </button>
            <p className="font-bold mt-1">
              Contact <span className="text-[#B22126]">Me : </span>{" "}
              <span className="text-blue-600">sarojmali6090@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="w-5/12">
          <img src={boy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
