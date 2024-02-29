import React, { useEffect } from "react";
import boy from "../Images/boy-removebg-preview.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  const theme = useSelector((store) => store.item.theme);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("isLogin")) {
      navigate("/");
    }
  }, []);

  return (
    <div
      className={`min-h-[81vh] flex justify-center items-center ${
        theme ? "bg-black" : "bg-white"
      }`}
    >
      {/* <div className="w-8/12 flex ">
        <div className="w-7/12 text-center flex items-center justify-center -mt-5">
          <div>
            <h3
              className={` font-bold text-xl ${
                theme ? "text-white" : "text-[#373737]"
              }`}
            >
              Hii👋
            </h3>
            <h4
              className={` font-bold text-3xl ${
                theme ? "text-white" : "text-[#373737]"
              }`}
            >
              I'm <span className="font-bold text-[#B22126]">Saroj Kumar</span>{" "}
            </h4>
            <h5
              className={` font-bold text-4xl ${
                theme ? "text-white" : "text-[#373737]"
              }`}
            >
              <span className="text-[#178A31]">M</span>
              <span className="text-yellow-500">E</span>
              <span className="text-[#61DBFC]">R</span>
              <span className="text-[#7AB566]">N</span> Stack{" "}
              <span className="text-[#B22126]">Web developer</span>
            </h5>
            <p
              className={`text-base leading-4 mt-2 ${
                theme ? "text-white" : "text-[#373737]"
              }`}
            >
              Hello, I'm Saroj Kumar, a Master's in Computer Application student
              from Bihar, currently specializing in MERN stack development at
              Lovely Professional University. With a passion for coding and
              problem-solving, I bring a strong foundation to develop innovative
              web solutions. Eager to collaborate and contribute to meaningful
              projects.
            </p>
            <button className="bg-[#B22126] px-3 py-[3px] text-white rounded-sm hover:bg-[#a31b1f] bg-light-mode-shadow mt-2">
              Download CV
            </button>
            <p
              className={` font-bold mt-2 text-xl ${
                theme ? "text-white" : "text-[#373737]"
              }`}
            >
              Contact <span className="text-[#B22126]">Me : </span>{" "}
              <span className="text-blue-600">sarojmali6090@gmail.com</span>
            </p>
            <div className="mt-2">
              <p
                className={`my-2 font-semibold ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                My <span className="text-[#B22126]">Github </span>Activity Graph
              </p>
              <GitHubCalendar
                blockSize={8}
                username="nkashyap01"
                colorScheme={`${theme ? "dark" : "light"}`}
              />
            </div>
          </div>
        </div>
        <div className="w-5/12">
          <img src={boy} alt="" />
        </div>
      </div> */}

      <div class="sprite-container">
        <div class="sprite image-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Flower_stock_photo.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-2">
          <img
            src="https://report-archive.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=761"
            alt="image"
          />
        </div>
        <div class="sprite image-3">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/6200b0dddcf32d3be937fa84/The-5-Technologies-That-Will-Change-The-Future-Of-The-Human-Race/960x0.jpg?height=399&width=711&fit=bounds"
            alt="image"
          />
        </div>
        <div class="sprite image-4">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388"
            alt="image"
          />
        </div>
        <div class="sprite image-5">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-6">
          <img
            src="https://images.shiksha.com/mediadata/images/1488259134phpShnPJa.jpeg"
            alt="image"
          />
        </div>
        <div class="sprite image-7">
          <img
            src="https://th-i.thgim.com/public/incoming/6os1a9/article65592232.ece/alternates/FREE_1200/lpu1.png"
            alt="image"
          />
        </div>
        <div class="sprite image-8">
          <img
            src="https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-9">
          <img
            src="https://i.ytimg.com/vi/GPRVlA6jIHI/maxresdefault.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-10">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388"
            alt="image"
          />
        </div>
        <div class="sprite image-11">
          <img
            src="https://distanceeducationschool.com/wp-content/uploads/2022/08/LPU-sorting.png"
            alt="image"
          />
        </div>
        <div class="sprite image-12">
          <img
            src="https://www.lpu.in/student_services/images/residence-new/about/pic1.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-13">
          <img
            src="https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-14">
          <img
            src="https://www.treebo.com/blog/wp-content/uploads/2022/08/header-8.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-15">
          <img
            src="https://c.ndtvimg.com/2023-11/c4bp49g_restaurant-generic_625x300_21_November_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"
            alt="image"
          />
        </div>
        <div class="sprite image-16">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=1200&h=-1&s=1"
            alt="image"
          />
        </div>
        <div class="sprite image-17">
          <img
            src="https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674823998.jpg?fit=around|562.5:360&crop=562.5:360;*,*"
            alt="image"
          />
        </div>
        <div class="sprite image-18">
          <img
            src="https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-19">
          <img
            src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg"
            alt="image"
          />
        </div>
        <div class="sprite image-20">
          <img
            src="https://thumbs.dreamstime.com/b/bee-flower-27533578.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
