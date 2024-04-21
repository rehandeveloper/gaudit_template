import React from 'react';
import businness from "./../assets/bg-1.jpg";
import unity from "./../assets/bg-2.jpg";
import { ChevronForwardOutline, Play } from 'react-ionicons';
import AnimatedButton from './common/AnimatedButton';

function AboutCompany() {
  return (
    <div className='w-full h-screen px-24 py-10 flex gap-x-24'>

      <div className='w-1/2 h-full p-10 relative'>
        <img src={businness} width={200} height={200} className='w-full h-full rounded-2xl shadow-sm'/>
        <div className='absolute w-96 h-52 rounded-lg right-0 bottom-0  '>
       
        <img src={unity} className='w-full h-full rounded-2xl shadow-sm'/>
        <span className="absolute top-1/2 left-1/2 flex justify-center items-center h-10 w-10">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
  <button className='absolute'>
  <Play
  color={'#fff'} 
  height="10px"
  width="10px"
  cssClasses={"text-hite"}
/>
  </button>
</span>


       
        </div>
      </div>
      <div className='w-1/2 h-full'>

        <div className='p-12'>
          <p className='text-primary font-medium text-xl'>ABOUT COMPANY</p>
          <h1 className='text-black text-6xl leading-tight font-semibold my-4'>
          Your Financial Partner for Success
          </h1>
          <p className='text-secondary my-2'>
          Proin laoreet nisi vitae pharetra mattis, etiam luctus suscipit velit vitae amatug ultricies. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo velit ante.
          </p>

          <div className='flex gap-x-10 my-14'>
            <div>
              <h1 className='text-3xl font-semibold'>Our Vision</h1>
              <ul className='my-8'>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
              </ul>
            </div>

            <div>
              <h1 className='text-3xl font-semibold'>Our Mission</h1>
              <ul className='my-8'>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
                <li className='my-2'>
                <ChevronForwardOutline color={"#000"}  cssClasses={"text-primary-light inline-block mb-1 mr-4"}/>
                <span className='text-secondary'>Nulla congue aliquet vulputate</span>
                </li>
              </ul>
            </div>
          </div>

          <AnimatedButton text={"More About Us"}/>
        </div>
        
       
       
        
      </div>
    </div>
  )
}

export default AboutCompany