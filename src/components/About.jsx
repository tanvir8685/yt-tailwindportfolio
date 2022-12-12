import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">


        Hi, I’m Tanvirul Islam! I’m from Dhaka Bangladesh, and I am a computer science engineer. I finished my diploma in 2014 and graduated in 2022. Besides, some professional and online certifications impact my learning career.
        </p>

        <br />

        <p className="text-xl">
        I am passionate about Exploring and Enthusiast about Web Development with skills in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Interested to face new challenges with my technical expertise, hard work, and dedication. Highly interested in web 3.0 technology and its integration with Human Interaction. My expertise is mostly in building interactive websites. These sites are digitalizing our society making everything possible online.
        </p>
      </div>
    </div>
  );
};

export default About;
