import React, { createRef, useState } from 'react'
import { ChevronDownOutline } from 'react-ionicons'
import { Link } from 'react-router-dom';
import { urlRoutes } from '../../routes';
import logo from "./../../assets/logo.svg";
import classnames from "classnames";

function Navbar() {
   const [state, setState] = useState(false);
   const [submenu, setSubmenu] = useState("");
   console.log(submenu, "submenu");
   const handleNav=()=>{
    setState((prev)=> !prev);
   }

  

  

  return (
    <div className="bg-primary h-24 flex items-center md:px-32 px-5 relative">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="logo relative">
            <a href="/" className="" >
              <img
                src={logo}
                alt="gaudit logo"
                width="150px"
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
              <Link to={"/coaching/0"}>
                <span>
                Our Coaching Programs
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
                  <Link to={"/coaching/0"}>CFO Services Package</Link>
                </li>
                <li className="text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300">
                  <Link to={"/coaching/1"}>
                  Finance Business Partner Package</Link>
                </li>

                <li className="text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300">
                  <Link to={"/coaching/2"}>Growth and Valuation Package</Link>
                </li>
              </ul>
            </li>

            <li className="text-white relative group p-4  min-w-max">
              <Link to={urlRoutes.CASES}>
                <span>
                  Case Studies
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
                  <Link to={urlRoutes.CASES}>Case details</Link>
                </li>
                {/* <li className="text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300">
                  <Link to={urlRoutes.CASE_DETAIL}>Case Detail</Link>
                </li>   */}
              </ul>
            </li>

            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.TEAMS}>Teams</Link>
            </li>
            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.CONTACT}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <button
  className="md:hidden flex flex-col p-3 items-center justify-center w-12 h-10 border-2 border-primary-light bg-primary-light hover:bg-primary rounded-md"
  onClick={handleNav}
>
  <span className={classnames("block w-full h-0.5 bg-white transition-transform origin-top-center", {"rotate-45 translate-y-1": state})}></span>
  <span className={classnames("block w-full h-0.5 bg-white m-1 transition-opacity", {"opacity-0 my-0": state,})}></span>
  <span className={classnames("block w-full h-0.5 bg-white transition-transform origin-bottom-center", {" -rotate-45 ": state})}></span>
</button>
{/* <button class="w-14 h-14 relative focus:outline-none bg-teal-600 rounded" >
                <div class="block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span  class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                    <span  class="block absolute  h-0.5 w-5 text-white bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                    <span  class="block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
                </div>
            </button> */}

      </div>

      {/* mobile menu */}
      <nav className= {classnames('bg-primary w-full px-4 min-h-max pb-10   absolute top-24 left-0 z-10 transition-transform duration-300 origin-top scale-y-0 md:hidden', {"scale-y-100": state})}>
          <ul className="flex flex-col  pt-16">
          <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.HOME}>Home</Link>
            </li>
            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.ABOUT}>About</Link>
            </li>
            <li className="text-white relative p-4  min-w-max" onClick={()=> setSubmenu(prev=> prev? null: 1)}>
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
                className={ classnames(`mt-4
                    rounded-b-lg z-10 bg-primary shadow-sm
                      border-t-primary-light border-t-4 min-w-max
                      transition-all duration-500
                      origin-top 
                      `, {
                        "scale-y-100 opacity-1 h-auto": submenu ==1,
                        "scale-y-0 opacity-0 h-0 overflow-hidden": submenu!=1,
                      })}
              >
                <li className=" text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300 ">
                  <Link to={urlRoutes.SERVICE}>Services</Link>
                </li>
                <li className="text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300">
                  <Link to={urlRoutes.SERVICE_DETAIL}>Service Detail</Link>
                </li>
              </ul>
            </li>

            <li className="text-white relative group p-4 min-w-max" onClick={()=> setSubmenu(prev=> prev? null: 2)}>
              <Link to={urlRoutes.CASES}>
                <span>
                  Case Studies
                  <ChevronDownOutline
                    color={"#fff"}
                    width={"15px"}
                    height={"15px"}
                    cssClasses={"inline mx-2 mb-1"}
                  />
                </span>
              </Link>
              <ul
                 className={ classnames(`mt-4
                    rounded-b-lg z-10 bg-primary shadow-sm
                      border-t-primary-light border-t-4 min-w-max
                      transition-all duration-500
                      origin-top 
                      `, {
                        "scale-y-100 opacity-1 h-auto": submenu ==2,
                        "scale-y-0 opacity-0 h-0 overflow-hidden": submenu!=2,
                      })}
              >
                <li className=" text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300 " >
                  <Link to={urlRoutes.CASES}>Case details</Link>
                </li>
                {/* <li className="text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300">
                  <Link to={urlRoutes.CASE_DETAIL}>Case Detail</Link>
                </li>   */}
              </ul>
            </li>

            

            

            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.TEAMS}>Teams</Link>
            </li>
            
            <li className="text-white p-4 min-w-max">
              <Link to={urlRoutes.CONTACT}>Contact Us</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar