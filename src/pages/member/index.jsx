import React from 'react'
import Hero from '../../component/common/Hero';
import image from "../../assets/bg-2.jpg";
import { Link, useParams } from 'react-router-dom';
import { urlRoutes } from '../../routes';
import AboutMySelf from '../serviceDetail/AboutMyself';
import { akritiImage } from '../../data/teams';

const Member = () => {
   const {member} =  useParams()
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Team Members`}
        description={
          <p className="w-full">
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            /{" "}
            <Link to={urlRoutes.TEAMS} className="text-info">
              Our Teams
            </Link>
            / <font className="capitalize">{member.replace("-", " ")}</font>
          </p>
        }
        />
        <AboutMySelf actorSlug={member}/>
    </>
  );
}

export default Member