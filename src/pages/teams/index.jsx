import React from "react";
import Hero from "../../component/common/Hero";
import image from "../../assets/bg-2.jpg";
import { urlRoutes } from "../../routes";
import { teamsData } from "../../data/teams";
import { Link } from "react-router-dom";

const Teams = () => {
  return (
    <>
      <Hero
        imageHeight={"h-456"}
        image={image}
        title={`Our Team`}
        description={
          <p>
            <Link to={urlRoutes.HOME} className="text-info">
              Home
            </Link>{" "}
            / Our Team
          </p>
        }
      />
      <section className="block mx-5 lg:mx-10 xl:mx-48 py-24 gap-x-11">
        <h1 className="text-black w-12/12 lg:text-5xl text-2xl leading-loose font-semibold my-4">
          Our Team
        </h1>
        <p className="text-secondary my-2">
            Meet our Talented and diverse teams, working collaboratively to deliver exceptional results. 
        </p>
        <div className="lg:flex flex-wrap gap-10">
          {teamsData.map((item, index) => {
            return (
              <div key={index} className="mt-10">
                <div className="max-w-96">
                  <div className="rounded-lg border border-info bg-white px-4 pt-8 pb-10">
                    <div className="relative mx-auto w-36 rounded-full">
                      <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                      <img
                        className="mx-auto h-auto w-full rounded-full"
                        src={item.profilePic}
                        alt={item.name}
                      />
                    </div>
                    <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                      {item.name}
                    </h1>
                    <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
                      {item.designation}
                    </h3>
                    <p className="text-center text-sm leading-6 text-info hover:text-gray-600">
                      {'"'}{item.quote}
                      {'"'}
                    </p>
                    {/* <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                      <li className="flex items-center py-3 text-sm">
                        <span>Status</span>
                        <span className="ml-auto">
                          <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                            Open for side gigs
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center py-3 text-sm">
                        <span>Joined On</span>
                        <span className="ml-auto">Apr 08, 2022</span>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Teams;
