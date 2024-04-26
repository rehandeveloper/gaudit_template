import React from 'react'
import { ChevronForwardOutline, Play } from 'react-ionicons';
import AnimatedButton from '../../component/common/AnimatedButton';

import businness from "../../assets/bg-1.jpg";
import unity from "../../assets/bg-2.jpg";
const AboutMySelf = () => {
  return (
    <div className="w-full min-h-screen lg:px-24 py-10 lg:flex block gap-x-24">
      <div className="lg:w-1/2 w-full h-full p-10 relative">
        <img
          src={businness}
          width={200}
          height={200}
          className="w-full h-full rounded-2xl shadow-sm"
        />
        <div className="absolute lg:w-96 w-52 lg:h-52 h-36 rounded-lg lg:right-0 right-4 bottom-0  ">
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
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full">
        <div className="p-12">
          <p className="text-primary font-medium text-xl">MYSELF</p>
          <h1 className="text-black lg:text-5xl text-2xl leading-loose font-semibold my-4">
            My name is Iman Aly
          </h1>
          <p className="text-secondary my-2">
            I am ACCA licensed and have over 20 years’ experience in Accounting
            and Strategic Finance with different companies in Oman and East
            Africa. I have also qualified as Strategic CFO in Strategic CFO
            Program 2022 with MECA CFO ACADEMY.
          </p>
          <p className="text-secondary my-2">
            We absolutely love assisting individuals like yourself in various
            areas through our Personal Development Program, as well as providing
            guidance in Accounting & Finance and Strategic Finance Coaching.
            Additionally, we offer a specialized program called Pure Strategic
            Mastery.
          </p>
          <p className="text-secondary my-2">
            We offer a specialized course designed to assist individuals in
            interview preparation and securing positions in the finance industry
            or higher-level roles. This unique program ensures that you have the
            necessary knowledge and experience to confidently enter the
            Professional World. This program is under the Personal Development
            Program.
          </p>
          <p className="text-secondary my-2">
            We have helped numerous students and professionals find their ideal
            career paths. Feel free to reach out with any questions or concerns
            you have about your own career journey. We can work together
            one-on-one to address any professional challenges you may be facing.
          </p>
          <p className="text-secondary my-2">
            You can access a variety of free templates to assist you in your
            studies, work, or professional development. Feel free to download
            them from linkedin.com/in/iman-hamdan-acca-657045118
          </p>
          <p className="text-secondary my-2">
            You can stay updated with more tips and insights in those areas by
            following me on LinkedIn. Feel free to connect with me there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMySelf