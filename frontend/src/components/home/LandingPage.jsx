import { Link, NavLink } from "react-router-dom";
import assets from "../../assets/assets";
import { useEffect, useRef } from "react";
import { setLogin } from "../../redux/itemSlice/ItemSlice";
import { useDispatch, useSelector } from "react-redux";

const HeroLeft = () => {
  const theme = useSelector((store) => store.item.theme);

  const container1 = useRef();

  return (
    <div
      className={`hero-left ${!theme ? "text-black" : "text-white"}`}
      ref={container1}
    >
      <p id="L-text">
        <img src={assets.heart} alt="heart image" />
        People Trust Us
      </p>
      <h1 id="L-text">
        We're <span>Serious</span> For <span>Food</span> & Delivery.
      </h1>
      <p id="L-text">
        Best cooks and best delivery guys all at your service. Hot tasty food
        will reach you in 60 minutes.
      </p>
      <NavLink to="/home" className="order-btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </NavLink>
    </div>
  );
};

const HeroRight = () => {
  const container2 = useRef();

  return (
    <div ref={container2} className="hero-right">
      <img src={assets.hero1} alt="hero image" />
      {[
        assets.food1,
        assets.food2,
        assets.food3,
        assets.food4,
        assets.food5,
        assets.food6,
        assets.seek,
      ].map((food, index) => (
        <img key={index} src={food} alt="food images" id="foodimg" />
      ))}
    </div>
  );
};

const HContainerContent = () => {
  const theme = useSelector((store) => store.item.theme);

  return (
    <>
      <img src={assets.hero2} alt="hero image 2" />
      <div className={`${!theme ? "text-black" : "text-white"}`}>
        <h2 className={`mb-4 ${!theme ? "text-black" : "text-white"}`}>
          We are <span>more</span> than <span>multiple</span> service
        </h2>
        <p className={`mb-4 ${!theme ? "text-black" : "text-white"}`}>
          This is a type of restaurant which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes from the French word meaning food.
        </p>
        <div className="flex flex-wrap gap-x-24">
          <div className="flex-cont">
            <p className="flex items-center">
              <img src={assets.order} alt="" className="mr-2" /> Online Order
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" />{" "}
              Pre-Reservation
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" /> Super
              Chef
            </p>
          </div>
          <div className="flex-cont">
            <p className="flex items-center">
              <img src={assets.time} alt="" className="mr-2" /> 24/7 Service
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" /> Organized
              Foodhut Place
            </p>
            <p className="flex items-center">
              <img src={assets.reservation} alt="" className="mr-2" /> Clean
              Kitchen
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const H2ContainerContent = () => {
  const theme = useSelector((store) => store.item.theme);

  return (
    <>
      <div className={`${!theme ? "text-black" : "text-white"}`}>
        <h2 className="mb-4">
          It’s Now <span>More Easy</span> to Order by Our Mobile{" "}
          <span>App</span>
        </h2>
        <p className="mb-4">
          All you need to do is downlode one of the best delivery apps, make a
          and most companies are opting for mobile app devlopment for food
          delivery
        </p>
        <div className="flex gap-x-4 mt-4">
          <img
            className="store cursor-pointer hover:scale-110 transition-all"
            src={assets.googlestore}
            alt=""
          />
          <img
            className="store cursor-pointer hover:scale-110 transition-all"
            src={assets.appstore}
            alt=""
          />
        </div>
      </div>
      <img src={assets.hero3} alt="" />
    </>
  );
};

const Buttons = () => {
  const theme = useSelector((store) => store.item.theme);

  return (
    <div className="flex items-center gap-5 relative -top-52 xs:-top-32">
      <button className="bg-[#B22126] px-4 py-1 text-white rounded-sm hover:bg-[#a31b1f]">
        <Link to="/login">Login</Link>
      </button>
      <button
        className={`${
          !theme ? "bg-black text-white" : "bg-white text-black"
        } px-4 py-1  rounded-sm`}
      >
        <Link to="/login">Register</Link>
      </button>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();

  const theme = useSelector((store) => store.item.theme);

  const container = useRef();

  useEffect(() => {
    dispatch(setLogin(false));
  }, []);

  return (
    <div
      ref={container}
      className={`home-container mt-[67px] ${!theme ? "bg-white" : "bg-black"}`}
    >
      <div className="hero-container flex items-center justify-between flex-wrap">
        <HeroLeft />
        <HeroRight />
        <img className="slider" src={assets.slider} alt="slider image" />
      </div>
      <Buttons />
      <div className="H-container flex items-center gap-x-20 flex-wrap">
        <HContainerContent />
      </div>
      <div className="H2-container flex items-center justify-between flex-wrap">
        <H2ContainerContent />
      </div>
    </div>
  );
};

export default Home;
