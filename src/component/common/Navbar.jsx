import React, { createRef, useState } from 'react'
import { ChevronDownOutline } from 'react-ionicons'
import { Link } from 'react-router-dom';
import { urlRoutes } from '../../routes';

function Navbar() {
   const [state, setState] = useState(false);
   const handleNav=()=>{
    setState((prev)=> !prev);

   }

  

  return (
    <div className="bg-primary h-24 flex items-center px-32 relative">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="logo">
            <a href="/">
              <img
                src="https://www.gaudit.com/wp-content/uploads/2020/03/gaudit-logo-white.png"
                alt="gaudit logo"
              />
            </a>
          </div>

          <ul className="hidden gap-x-5 mx-40  lg:flex">
            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.HOME}>Home</Link>
            </li>
            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.ABOUT}>About</Link>
            </li>
            <li className="text-white relative group p-4  min-w-max">
              <Link to={urlRoutes.SERVICE}>
                <span>
                  Services
                  <ChevronDownOutline
                    color={"#fff"}
                    width={"15px"}
                    height={"15px"}
                    cssClasses={"inline mx-2 mb-1"}
                  />
                </span>
              </Link>
              <ul
                className="
                    opacity-0 scale-y-0
                     absolute top-14 rounded-b-lg z-10 bg-primary shadow-md
                      border-t-primary-light border-t-4 min-w-max  -translate-x-1/2 left-1/2
                      transition-all duration-500
                      group-hover:opacity-100
                      group-hover:scale-y-100
                      origin-top
                      "
              >
                <li className=" text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300 ">
                  <Link to={urlRoutes.SERVICE}>Services</Link>
                </li>
                <li className="text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300">
                  <Link to={urlRoutes.SERVICE_DETAIL}>Service Detail</Link>
                </li>
              </ul>
            </li>

            <li className="text-white relative group p-4  min-w-max">
              <Link to={urlRoutes.SERVICE}>
                <span>
                  Cases
                  <ChevronDownOutline
                    color={"#fff"}
                    width={"15px"}
                    height={"15px"}
                    cssClasses={"inline mx-2 mb-1"}
                  />
                </span>
              </Link>
              <ul
                className="
                    opacity-0 scale-y-0
                     absolute top-14 rounded-b-lg z-10 bg-primary shadow-md
                      border-t-primary-light border-t-4 min-w-max  -translate-x-1/2 left-1/2
                      transition-all duration-500
                      group-hover:opacity-100
                      group-hover:scale-y-100
                      origin-top
                      "
              >
                <li className=" text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300 ">
                  <Link to={urlRoutes.CASES}>Cases</Link>
                </li>
                <li className="text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300">
                  <Link to={urlRoutes.CASE_DETAIL}>Case Detail</Link>
                </li>  
              </ul>
            </li>

            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.CONTACT}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <button
          className="flex flex-col items-center justify-center w-12 h-10 border-2 border-primary-light bg-primary-light hover:bg-primary rounded-md"
          onClick={handleNav}
        >
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white mt-1"></span>
          <span className="block w-5 h-0.5 bg-white mt-1"></span>
        </button>
      </div>

      {state ? (
        <nav className="bg-primary w-full  absolute top-24 left-0 z-10">
          <ul className="flex flex-col items-center pt-16">
            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-4 block hover:bg-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

export default Navbar