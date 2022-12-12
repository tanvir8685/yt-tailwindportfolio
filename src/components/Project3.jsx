import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../assets/tn1.PNG'
import slide2 from '../assets/tn2.PNG'
import slide3 from '../assets/tn3.PNG'
import slider4 from '../assets/tn4.PNG'

const Project3 = () => {
    return (

        <div className='bg-gradient-to-b from-black via-black to-gray-800  text-white'>
                       <div className="navbar bg-neutral text-neutral-content">
  <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
</div>
                    <div className=' container mx-auto'>
 
            
            
            <div className="carousel w-full container mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slide1} className="w-full"alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slide2} alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slide3}alt='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider4} alt ='' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

            <div className='mt-24 '>
                <h2 className='text-5xl mb-4 font-bold'>Project Details</h2>
                <p className='text-2xl font-bold'>Project Name:  TN-Learning- || <a href="https://tn-learning.web.app/">Live link</a> || <a href="https://github.com/tanvir8685/tn-learning-clientside-a10">Git Client Link</a> || <a href="https://github.com/tanvir8685/tn-learning-serverside-a10">Git Server Link</a> </p>
                <p className='text-xl my-4'><span className='text-2xl font-bold'>About</span>: I built this website focusing on the frontend part. On this website, a learning platform
showcases their courses and to buy their course.</p>
                <p className='text-2xl font-bold'>Some Chalenges and Features</p>
                <p className='text-xl'>1:To purchase any course the user must be logged In and we show their data dynamically on the
purchase page</p>
                <p className='text-xl mb-4'>2:User can take a pdf of the provided information</p>
<p className='text-2xl font-bold'>Used Technology</p>
<p className='text-xl'><span className='text-xl font-bold'>1 Frontend</span>:  HTML,CSS, JS ,Tailwind, DaisyUI,React ,React Router Dom,React PDF, Firebase</p>
                <p className='text-xl mb-4'><span className='text-xl font-bold'>2 Backend</span> : Node.js, Express.js</p>
            </div>
        <Link className='btn container' to='/'><button>Back</button></Link>
        </div>
        </div>
    );
};

export default Project3;