import React from 'react'
import { ChevronForwardOutline, Play } from 'react-ionicons';
import AnimatedButton from '../../component/common/AnimatedButton';

import businness from "../../assets/bg-1.jpg";
import unity from "../../assets/bg-2.jpg";
import { urlRoutes } from '../../routes';
import { teamsData } from '../../data/teams';
const AboutMySelf = ({ actorSlug }) => {
  const my = teamsData.find((item) => (item.slug == actorSlug))
  return (
    <div className="w-full min-h-screen lg:px-24 py-10 lg:flex block gap-x-24">
      <div className="lg:w-1/2 w-full h-full p-10 relative">
        <img
          src={my.profilePic}
          width={200}
          height={200}
          className="w-full h-full rounded-2xl shadow-sm"
        />
        {/* <div className="absolute lg:w-96 w-52 lg:h-52 h-36 rounded-lg lg:right-0 right-4 bottom-0  ">
          <img src={unity} className="w-full h-full rounded-2xl shadow-sm" />
          <span className="absolute top-1/2 left-1/2 flex justify-center items-center h-10 w-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
            <button className="absolute">
              <Play
                color={"#fff"}
                height="10px"
                width="10px"
                cssClasses={"text-hite"}
              />
            </button>
          </span>
        </div> */}
      </div>
      <div className="lg:w-1/2 w-full h-full">
        <div className="p-12">
          <p className="text-primary font-medium text-2xl"> {my.name}</p>
          <h1 className="text-black  text-sm leading-loose font-semibold my-2">
          {my.designation}
          </h1>
          {my.description}
          <div className='pt-10'>
            {
              my.redirect && 
          <AnimatedButton text={"View Profile"} to={my.redirect}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMySelf