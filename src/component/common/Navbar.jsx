import React from 'react'
import { ChevronDownOutline } from 'react-ionicons'

function Navbar() {
  return (
    <div className='bg-primary w-full h-24 flex items-center p-20'>

    

        <div className='w-3/4 flex justify-start items-center'>
          <div className='logo'>
            <a href='/'>
              <img src='https://www.gaudit.com/wp-content/uploads/2020/03/gaudit-logo-white.png' alt='gaudit logo' />
            </a>
          </div>
   

            <ul className='flex gap-x-5 mx-40'> 
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
                    <ul className='group-hover:block hidden absolute top-14 rounded-b-lg z-10 bg-primary shadow-md border-t-primary-light border-t-4 min-w-max  -translate-x-1/2 left-1/2'>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900'>
                            <a href='#'>Web Design</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900'>
                            <a href='#'>Web Development</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900'>
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
                    <ul className='group-hover:block hidden  absolute top-14 rounded-b-lg z-10 bg-primary shadow-md border-t-primary-light border-t-4 min-w-max  -translate-x-1/2 left-1/2'>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900'>
                            <a href='#'>Web Design</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900'>
                            <a href='#'>Web Development</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900'>
                            <a href='#'>Mobile Development</a>
                        </li>
                        <li className='text-white p-4 border-b-[1px] border-b-cyan-900'>
                            <a href='#'>Graphics Design</a>
                        </li>
                    </ul>
                </li>
                <li className='text-white p-4 min-w-max'>
                    <a href='#'>Contact</a>
                </li>
            </ul>

        </div>
        

    </div>
  )
}

export default Navbar