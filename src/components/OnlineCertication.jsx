import React from "react";
import english from '../assets/english.png'
import excel from '../assets/excel.png'
import python from '../assets/python.png'



const OnlineCertification = () => {
  const portfolios = [
    {
      id: 1,
      src: english,
      title:"Speak English Professionally: In Person, Online & On the Phone",
      live:'https://coursera.org/share/365849c3648dbe72038ebaaf9be819c8',
     
    },
    {
      id: 2,
      src: excel,
      title:'Excel Skills for Business: Essentials',
      live:'https://coursera.org/share/956ea9f676a3af6ad63702daea26b329',
      
    },
    {
      id: 3,
      src: python,
      title:'Python Data Structures',
      live:'https://coursera.org/share/01ed707205bed8b651704d4d744bf72d',
      
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
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Online Courses
          </p>
          <p className="py-6">Check out some of my online courses</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,live,title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="px-6">{title}</p>
              <div className="">
                <a href={live}><button className="w-1/2 px-6 py-3  duration-200 hover:scale-105">
                  See online
                </button></a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineCertification;
