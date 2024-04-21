import React from 'react'
import { ArrowForwardOutline } from 'react-ionicons'

function BlogCard() {
  return (
        <div className="group relative w-full  min-h-[32rem] my-4">
          <div className="relative  w-full overflow-hidden rounded-t-2xl  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75  sm:h-64">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="duration-500 transition-transform ease-in-out group-hover:scale-125 h-full w-full object-cover object-center"/>
          </div>
          <div className='border-1 bg-info rounded-b-2xl'>
          <div className='p-8'>
          <h3 className="text-left my-8 text-2xl font-bold text-white">
          Financial Restructuring
          </h3>
          <p className="text-base text-left text-white">
          Nunc volutpat, tortor sit amet sagittis efen sed tellus diam laoreet justo, ut elementum odio nibh eget ligula dolor dui tempus.
              </p>
          <p className='hover:opacity-80  text-left flex items-center gap-2 text-white my-6'>
            <span>
            Read more
            </span>
              
              <ArrowForwardOutline
  color={'#fff'} 
  height="20px"
  width="20px"
/>

          </p>

          </div>

          </div>
         
        
        </div> 
  
  )
}

export default BlogCard