import React, { useEffect, useState } from "react";
import tree from "../Images/tree.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import foodbg from "../Images/foodbg2.png";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../Utils/ItemSlice";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.item.theme);

  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(setLogin(true));
        navigate("/body");
        toast.success("You are logged in with Google", {
          position: "top-center",
          theme: "dark",
        });
       
      })
      .catch((error) => {
        toast.error("Failed to logged in with Google", {
          position: "top-center",
          theme: "dark",
        });
      });
  };

  const handleGithubAuth = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        
        toast.success("You are logged in with Github", {
          position: "top-center",
          theme: "dark",
        });
        dispatch(setLogin(true));
        navigate("/body");
      })
      .catch((error) => {
        toast.error("Failed to logged in with Github", {
          position: "top-center",
          theme: "dark",
        });
      });
  };

  const handleRegister = async () => {
    const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (!emailCheck) {
      toast.error(`Email is not valid`, {
        position: "top-center",
        theme: "dark",
      });
    }

    const passwordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!passwordCheck) {
      toast.error(`Password is not valid`, {
        position: "top-center",
        theme: "dark",
      });
    }

    if (emailCheck == true && passwordCheck == true) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("You are registered", {
            position: "top-center",
            theme: "dark",
          });
          setIsLogin(true);
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(`${errorMessage.slice(17, 42)}`, {
            position: "top-center",
            theme: "dark",
          });
        });
    }
  };

  const handleLogin = async () => {
    const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (!emailCheck) {
      toast.error("Email is not valid", {
        position: "top-center",
        theme: "dark",
      });
    }

    const passwordCheck =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!passwordCheck) {
      toast.error("Password is not valid", {
        position: "top-center",
        theme: "dark",
      });
    }

    if (emailCheck == true && passwordCheck == true) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("You are logged in", {
            position: "top-center",
            theme: "dark",
          });
          setEmail("");
          setPassword("");
          dispatch(setLogin(true));
          navigate("/body");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(`${errorMessage.slice(17, 42)}`, {
            position: "top-center",
            theme: "dark",
          });
        });
    }
  };

  if (window.location.pathname == "/") dispatch(setLogin(false));

  return (
    <div
      className={`flex justify-center items-center h-[81vh] ${
        theme ? "bg-[#373737]" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-center flex-col lg:flex-row">
        <img className="" src={foodbg} alt="" />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col text-center bg-shadow pl-5 p-7 mb-1 test rounded-sm lg:mt-12"
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
            <>
              <button
                onClick={() => {
                  handleLogin();
                }}
                className="p-1 rounded-sm bg-[#B22126] relative left-2 text-white font-bold hover:bg-[#e76854] duration-300"
              >
                Login
              </button>
              <div
                onClick={() => handleGoogleAuth()}
                className={`flex py-1 relative left-2 rounded-sm mt-2 items-center justify-center font-bold ${
                  theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
                }`}
              >
                <FcGoogle className="text-xl" />
                <button className="pl-2">Login with Google</button>
              </div>

              <div
                onClick={() => handleGithubAuth()}
                className={`flex py-1 relative left-2 rounded-sm mt-2 items-center justify-center font-bold ${
                  theme ? "bg-white text-[#373737]" : "bg-[#373737] text-white"
                }`}
              >
                <SiGithub className="text-xl" />
                <button className="pl-2">Login with Github</button>
              </div>
            </>
          ) : (
            <button
              onClick={() => {
                handleRegister();
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
