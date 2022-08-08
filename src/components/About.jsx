import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>

          <div className='sm:text-right text-4xl font-bold'>

            <p>Hi. I'm Mustapha, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I like to find solutions to technical problems. I did it for several years as a network and system technician.
              I succeeded to give another dimension to my career by following a graduate web developer training.
              I learnt to use the tools to quickly identify and solve real-world problems that I might come across in my IT role.I look at a bunch of different strategies and approaches for tackling the most common pitfalls of your code and IT infrastructure.I have learnt strategies for approaching almost any technical problem and then see how those apply to solving different real-world scenarios. What would you do if you had
              a software expert available at your fingertips?</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
