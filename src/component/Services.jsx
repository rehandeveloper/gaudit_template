import React from 'react'
import ServiceCard from './common/ServiceCard'
// import { servicesData } from '../utils/constant/data';
import {motion} from 'framer-motion';
import { serviceData } from '../data/services';

function OurServices() {

  const boxVariant = {
    hidden: {
        x: "-100%", //move out of the site
    },
    visible: {
        x: 0, // bring it back to nrmal
        transition: {
          delayChildren: 0.5, // this will set a delay before the children start animating
          staggerChildren: 0.3 // this will set the time inbetween children animation
        }
      
    },
   
};



  return (
    <div className='w-full min-h-screen p-10'>
        <p className='upper text-primary text-center'>OUR SERVICES</p>
        <h1 className='text-center lg:text-6xl text-4xl font-bold my-10'>Real Accounting Services for You</h1>
        {/* <p className='text-secondary text-center md:w-3/6 mx-auto'>
        Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse pharetra. Finibus condimentum aenean lacinia sem metus Integer.
        </p> */}
        <motion.div
        
       layout={boxVariant}
       whileInView="visible"
       initial="hidden"
        className='grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row lg:p-20 my-8 md:my-10'>

            {
                serviceData.map((item, index)=><ServiceCard key={item.id} item ={item} index={index}/> )
            }

        
        
            
        </motion.div>
        
       

    </div>
  )
}

export default OurServices