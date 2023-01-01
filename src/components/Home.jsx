import React from "react";
import herop from "../assets/herop.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl text-center sm:text-left sm:text-7xl font-bold text-white">
            I'm a Jr. Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          A highly motivated and hard-working Web Developer .
Passionate about implementing and launching new projects. Ability to translate business requirements into
technical solutions.
          </p>

          <div>
            <a
              href="/Tanvirul_Islam_Resume.pdf"
              smooth
              duration={500}
              download='Tanvirul Islam Resume'
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="w-5/6 sm:w-3/4 mt-56 md:mt-0">
          <img
            src={herop}
            alt="my profile"
            className="rounded-2xl  mx-auto  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
