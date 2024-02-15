import React, { useEffect, useRef } from "react";
import contactImage from "../Images/contactImage.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const theme = useSelector((store) => store.item.theme);
  const navigate = useNavigate();
  const login = useSelector((store) => store.item.login);

  useEffect(() => {
    if (login == false) navigate("/");
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2ox8k2s", "template_vy40bvr", form.current, {
        publicKey: "HlO30OjjrKjLIDBVr",
      })
      .then(
        () => {
          toast.success(
            `Hello ${form.current.user_name.value}, mail is sent.`,
            {
              position: "top-center",
              theme: "dark",
            }
          );
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          toast.error(
            `Hello ${form.current.user_name.value}, mail is not sent.`,
            {
              position: "top-center",
              theme: "dark",
            }
          );
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        }
      );
  };

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
        <div className="flex justify-center items-center mt-2 p-4 ">
          <form className=" bg-shadow p-2" ref={form} onSubmit={sendEmail}>
            <h3
              className={` font-bold text-xl text-center mt-2 ${
                theme ? "text-white" : "text-[#373737]"
              }`}
            >
              Message <span className="text-[#B22126]">me</span>
            </h3>
            <div className="flex flex-col mt-2">
              <div className="flex justify-center items-center">
                <input
                  className="border-2 w-5/12 focus:outline-none border-2   p-1 rounded-sm focus:border-[#B22126] mt-2"
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                />
                <input
                  className="border-2 w-5/12 focus:outline-none border-2  p-1 rounded-sm ml-4 focus:border-[#B22126] mt-2"
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex justify-center items-center flex-col mt-2">
                <textarea
                  rows="5"
                  name="message"
                  className="border-2 rounded-none row w-10/12 mt-2 resize-none px-2 focus:outline-[#B22126]"
                  placeholder="Type your message here..."
                ></textarea>

                <input
                  className="bg-[#B22126] px-2 py-1 w-10/12 mt-2 rounded-sm text-white font-bold bg-shadow hover:bg-[#921317] duration-200 mt-2"
                  type="submit"
                  value="Send"
                />
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
