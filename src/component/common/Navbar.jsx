import React, { createRef, useState } from 'react'
import { ChevronDownOutline } from 'react-ionicons'

function Navbar() {
   const [state, setState] = useState(false);
   const handleNav=()=>{
    setState((prev)=> !prev);

   }

  

  return (

    <div className='bg-primary h-24 flex items-center px-32 relative'>
        <div className='w-full flex justify-between items-center'>

            <div className='flex justify-start items-center'>
            <div className='logo'>
            <a href='/'>
              <img src='https://www.gaudit.com/wp-content/uploads/2020/03/gaudit-logo-white.png' alt='gaudit logo' />
            </a>
          </div>
   

            <ul className='hidden gap-x-5 mx-40  lg:flex'> 
                <li className='text-white p-4 min-w-max'>
                    <a href='#'>Home</a>
                </li>
                <li className='text-white p-4 min-w-max'>
                    <a href='#'>About</a>
                </li>
                <li className='text-white relative group p-4  min-w-max'>
                    <a href='#'>
                        <span>
                        Services
                    <ChevronDownOutline
                    color={"#fff"}
                    width={"15px"}
                    height={"15px"}
                    cssClasses={"inline mx-2 mb-1"}/>
                        </span>
                  
                    </a>
                    <ul className='
                    opacity-0 scale-y-0
                     absolute top-14 rounded-b-lg z-10 bg-primary shadow-md
                      border-t-primary-light border-t-4 min-w-max  -translate-x-1/2 left-1/2
                      transition-all duration-500
                      group-hover:opacity-100
                      group-hover:scale-y-100
                      origin-top
                      '>

                        <li className=' text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300 '>
                            <a href='#'>Web Design</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300'>
                            <a href='#'>Web Development</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300'>
                            <a href='#'>Mobile Development</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px]'>
                            <a href='#'>Graphics Design</a>
                        </li>
                    </ul>
                </li>

                <li className='text-white relative group p-4  min-w-max'>
                    <a href='#'>
                        <span>
                        Services
                    <ChevronDownOutline
                    color={"#fff"}
                    width={"15px"}
                    height={"15px"}
                    cssClasses={"inline mx-2 mb-1"}/>
                        </span>
                  
                    </a>
                    <ul className='
                    opacity-0 scale-y-0
                     absolute top-14 rounded-b-lg z-10 bg-primary shadow-md
                      border-t-primary-light border-t-4 min-w-max  -translate-x-1/2 left-1/2
                      transition-all duration-500
                      group-hover:opacity-100
                      group-hover:scale-y-100
                      origin-top
                      '>

                        <li className=' text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300 '>
                            <a href='#'>Web Design</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300'>
                            <a href='#'>Web Development</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900 group-hover:border-b-0 transition-all delay-100 ease-out duration-300'>
                            <a href='#'>Mobile Development</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px]'>
                            <a href='#'>Graphics Design</a>
                        </li>
                    </ul>
                </li>
             
                
                <li className='text-white p-4 min-w-max'>
                    <a href='#'>Contact</a>
                </li>
            </ul>

            </div>
         

       

 <button className="flex flex-col items-center justify-center w-12 h-10 border-2 border-primary-light bg-primary-light hover:bg-primary rounded-md" onClick={handleNav} >
  <span className="block w-5 h-0.5 bg-white"></span>
  <span className="block w-5 h-0.5 bg-white mt-1"></span>
  <span className="block w-5 h-0.5 bg-white mt-1"></span>
</button>







        </div>


{
    state ?
    <nav  className="bg-primary w-full  absolute top-24 left-0 z-10">
    <ul className="flex flex-col items-center pt-16">
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">Home</a></li>
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">About</a></li>
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">Services</a></li>
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">Contact</a></li>
  
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">Home</a></li>
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">About</a></li>
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">Services</a></li>
      <li><a href="#" className="py-2 px-4 block hover:bg-gray-200">Contact</a></li>
    </ul>
  </nav>: null
}


        

    </div>
  )
}

export default Navbar