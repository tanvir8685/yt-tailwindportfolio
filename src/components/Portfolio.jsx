import React from "react";
import { FaGithub } from "react-icons/fa";

import resell from '../assets/resell.png'
import parlour from '../assets/parlour.png'
import learnig from '../assets/learning.png'
import { Link } from "react-router-dom";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: resell,
      title:'VehicleHUB',
      live:'https://products-resale-42ae3.web.app/',
      git:'https://github.com/tanvir8685/product-resell-client-a12'
    },
    {
      id: 2,
      src: parlour,
      title:'RhadikaParlour',
      live:'https://beauty-parlour-9605d.web.app/',
      git:'https://github.com/tanvir8685/beauty-parlour-clientside-a11'
    },
    {
      id: 3,
      src: learnig,
      title:'TN-Learning',
      live:'https://tn-learning.web.app/',
      git:'https://github.com/tanvir8685/tn-learning-clientside-a10'
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,live,git,title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
              
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="py-2 px-2">Title : {title}</p>
              <div className="flex  items-center justify-center">
                <a href={live}><button className="w-1/2 px-2 py-3  duration-200 hover:scale-105">
                  Demo
                </button></a>
                <button className="w-1/2 px-2 py-2  duration-200 hover:scale-105">
                  <a href={git}>Code</a>
                  
                </button>
                <button className="w-1/2 px-2 py-2  duration-200 hover:scale-105">
                  
                  <Link to={`/project${id}`}>Details</Link>
                </button>
                
                
              </div>

            </div>
          ))}
        </div>
        <p  className="py-6 flex">To explore more on Github<a className="flex mx-10"  href="https://github.com/tanvir8685"> <FaGithub className="mx-2"/>  Click here</a> </p>
      </div>
    </div>
  );
};

export default Portfolio;
