import classNames from 'classnames'
import React from 'react'
import { ArrowForwardOutline } from 'react-ionicons'
import { useNavigate } from 'react-router-dom';
import { delay, motion } from "framer-motion"

function ServiceCard({item, index}) {

    const cardVariant = {

        visible: {
            x:   0,
            y:  0,
           
            opacity: 1,
            scale:1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                mass: 0.2
                

                // remove delay: 0.3,
              }
        },
        hidden: {
            x: index %2 ==0?"-10%" : "50%",
            y: !index %2 ==0?"-10%" : "50%",
            opacity: 0,
            scale:0,
            rotate: (5 * index) %2? -45 * index: 45 * index,
        },
       
        
    };
    const navigate = useNavigate();
    const { slug,  title, description, Icon, active = false } = item;
  return (
    <motion.div
    variants={cardVariant}
    whileInView="visible"
    initial="hidden"
    className={classNames(
    "relative group w-full min-h-64 p-8 pb-20  rounded-lg border border-primary services",
   { 'hover:bg-white bg-primary transition-colors active': active},
   { 'hover:bg-primary transition-colors': !active},
    )}
    >
        <i>
           
            <Icon width={"36px"}  height={"36px"} cssClasses={"icon"}/>
        </i>
        <h4 className={classNames(
            "font-bold text-2xl my-4",
            { 'group-hover:text-black text-white ': active},
            { 'group-hover:text-white text-black': !active},
            ) }>{title}</h4>
        <p className={
            classNames("line-clamp-4",{
                'group-hover:text-secondary text-white': active},
               { 'group-hover:text-white text-secondary': !active}
            )
        
    }
        >
            {description}
        </p>

        <button 
        onClick={()=> navigate(`/service-detail/${slug}`)}
        className={classNames('absolute bottom-0 py-5 uppercase mt-5 transition-transform duration-300 hover:-translate-y-2',
        { "group-hover:text-primary-light text-white":active},
        { "group-hover:text-white text-primary-light":!active},
            )}>
           <span>Read more </span> 
            <ArrowForwardOutline   width={"15px"} cssClasses={"icon inline mb-1 mx-2"}/>

        </button>

    </motion.div>
  )
}

export default ServiceCard