import React from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CoachingData } from "../utils/constant/data";
function Coaching() {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-max py-16 lg:px-28 px-16  lg:gap-x-32" >
      <div className="text-center  my-10">
        <p className="uppercase text-primary font-bold tracking-wide text-xl">
          Our Coaching Programs
        </p>
      </div>

      <div className="md:flex md-flex-wrap gap-x-10">

        {
          CoachingData.map((i, ind)=> {
            return(
              <motion.div key={i.id} 
              
              initial={{ opacity: 0, x: "-100%",   rotate: ind*15, transformOrigin:"top " }}
              whileInView={{ opacity: 1, x: 0, rotate:0,  }}
            
              transition={{ type: "spring", stiffness: 100, delay: ind* 0.15 }}
        className="w-full bg-primary hover:bg-primary-light hover:border-teal-200 border-white border-t-4 transition-colors select-none  p-10 my-2
        rounded-lg" 
        onClick={()=> navigate(`/coaching/${ind}`)}>
                <motion.h1 
                 initial={{ opacity: 0, x: "-10%",   rotate: ind*15, transformOrigin:"top " }}
                 whileInView={{ opacity: 1, x: 0, rotate:0,  }}
                 transition={{ type: "spring", stiffness: 100, delay: ind* 0.30 }}
                className="text-xl font-bold my-8 text-white ">
                  {i.head}
                </motion.h1>
                {i.programs.map((i, index) => (
        <div key={index} className="mb-4">
          <motion.p
           initial={{ opacity: 0, x: "-10%",   rotate: ind*15, transformOrigin:"top " }}
           whileInView={{ opacity: 1, x: 0, rotate:0,  }}
           transition={{ type: "spring", stiffness: 100, delay: ind* 0.30 }}
          className="font-bold text-md text-white mb-2">
            {i.name}
            
            </motion.p>
          <ul className="list-disc list-inside">
            {i.child.map((j, idx) => (
              <li key={idx} className="ml-4 mb-1 text-white">{j}</li>
            ))}
          </ul>
        </div>
      ))}


              
              </motion.div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Coaching;
