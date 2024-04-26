import React from 'react'

function CompanyStatus() {
  return (
    <div className="w-full min-h-96 fixed-image parallax flex justify-center items-center lg:p-28 p-14 my-28">
      <div className="flex flex-wrap justify-center items-center gap-20 ">
        <h1 className="text-white lg:w-72 lg:text-left text-center w-full lg:text-5xl text-3xl font-bold tracking-wide leading-snug">
          Our Company In Number
        </h1>

        <h4 className="text-center text-white  min-w-max">
          <span className="block text-6xl font-bold">
            15<sup className="p-2">th</sup>
          </span>
          <span className="text-2xl font-bold">Years Experience</span>
        </h4>
        <h4 className="text-center text-white min-w-max">
          <span className="block text-6xl font-bold">
            75000<sup className="p-2">+</sup>
          </span>
          <span className="text-2xl font-bold">Happy Client</span>
        </h4>

        <h4 className="text-center text-white min-w-max">
          <span className="block text-6xl font-bold">
            430000<sup className="p-2">+</sup>
          </span>
          <span className="text-2xl font-bold">Project Completed</span>
        </h4>
      </div>
    </div>
  );
}

export default CompanyStatus