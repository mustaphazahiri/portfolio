import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import MZ from '../assets/MZ-Photo.jpg';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <img className='w-40 mb-5' src={MZ} alt="HTML icon" />
        <p className='text-pink-600 my-5'>Hi, my name is</p>

        <h1 className='text-4xl my-5 sm:text-7xl font-bold text-[#ccd6f6]'>
          Mustapha Zahiri
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          {/* I'm a React, Python Developer. */}
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am training to become a React NodeJs and Pyhton developer.

          I develop web applications with different frameworks such as React Angular and Laravel.

          I have a long experience as a windows and Linux helpdesk technician. I decided to train to become a web and mobile web developer.
          I'm looking for a first experience as a junior dev, I would like to find a position in a team where I can both progress and contribute to different projects of the company.

        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
