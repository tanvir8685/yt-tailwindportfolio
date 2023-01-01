import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../assets/rhadhika1.PNG'
import slide2 from '../assets/rhadhika2.PNG'
import slide3 from '../assets/rhadhika3.PNG'
import slider4 from '../assets/rhadhika4.PNG'

const Project2 = () => {
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

            <div className='mt-24 px-4 '>
                <h2 className='text-5xl mb-4 font-bold'>Project Details</h2>
                <p className='text-2xl font-bold'>Project Name: Rhadika’s Parlour- || <a href="https://beauty-parlour-9605d.web.app/">Live link</a> || <a href="https://github.com/tanvir8685/beauty-parlour-clientside-a11">Git Client Link</a> || <a href="https://github.com/tanvir8685/beauty-parlour-server-a11">Git Server Link</a> </p>
                <p className='text-xl my-4'><span className='text-2xl font-bold'>About</span>: I built this website to get people's comments on a specific service. By clicking on details
users can show details and give a comment on this service.</p>
                <p className='text-2xl font-bold'>Some Chalenges and Features</p>
                <p className='text-xl'>1:To comment anything on the specific service user must be logged on. After that the user can
comment and see all his comments in my reviews.</p>
                <p className='text-xl mb-4'>2:Users can delete his comment from the review part. After deleting the comment it will be not shown
in the specific service as well.To click on each photo the photo will be pop up to better experience</p>
<p className='text-2xl font-bold'>Used Technology</p>
<p className='text-xl'><span className='text-xl font-bold'>1 Frontend</span>:  Frontend:HTML,CSS, JS ,Tailwind, DaisyUI,React ,React Router Dom,React Photo View, Firebase</p>
                <p className='text-xl mb-4'><span className='text-xl font-bold'>2 Backend</span> : Node.js, Express.js, Cors,MongoDB</p>
            </div>
            <Link className='btn container' to='/'><button>Back</button></Link>
        </div>
        </div>
    );
};

export default Project2;