import React from "react";
import {motion} from "framer-motion";
function Coaching() {
  return (
    <section className="w-full min-h-max py-16 lg:px-28 px-16  lg:gap-x-32">
      <div className="text-center  my-10">
        <p className="uppercase text-primary font-bold tracking-wide text-xl">
          Our Coaching Programs
        </p>
      </div>

      <div className="md:flex md-flex-wrap gap-x-10">
        <motion.div  
         initial={{ opacity: 0, x: "-100%", rotate:30, transformOrigin:"top left" }}
         whileInView={{ opacity: 1, x: 0, rotate:0 }}
       
         transition={{
           duration: 1,
           opacity: {
             duration: 0.2,
           },
         }}
         className="bg-primary
          hover:bg-primary-light hover:border-teal-200
           border-white border-t-4 transition-colors select-none  p-10 my-2">
          <h1 className="text-xl font-bold my-2 text-white ">
            Personal Development Coaching Program
          </h1>
          <p className="text-white font-thin text-sm my-4">
            Embark on a transformative journey with our Personal Development
            Coaching Program. Designed for professionals seeking personal
            growth, this program enhances skills, boosts confidence, and
            accelerates career advancement through workshops and personalized
            coaching.
          </p>
        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: "100%" }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{
           duration: 1.5,
           opacity: {
             duration: 0.5,
           },
         }}
        className="bg-primary hover:bg-primary-light hover:border-teal-200 border-white border-t-4 transition-colors select-none  p-10 my-2">
          <h1 className="text-xl font-bold my-2 text-white ">
            Strategic Finance Coaching Program
          </h1>
          <p className="text-white font-thin text-sm my-4">
            Elevate your financial leadership with our Strategic Finance
            Coaching Program. Tailored for finance professionals and business
            leaders, this program sharpens strategic decision-making and
            understanding of market dynamics, empowering you to navigate the
            complexities of finance and strategy.
          </p>
        </motion.div>
        <motion.div
        
        initial={{ opacity: 0, x: "100%", rotate:-30, transformOrigin:"top right", }}
        whileInView={{ opacity: 1, x: 0, rotate:0 }}
        transition={{
          duration: 1,
          opacity: {
            duration: 0.2,
          },
        }}
        className="bg-primary hover:bg-primary-light hover:border-teal-200 border-white border-t-4 transition-colors select-none  p-10 my-2">
          <h1 className="text-xl font-bold my-2 text-white ">
            Pure Strategic Mastery Coaching Program{" "}
          </h1>
          <p className="text-white font-thin text-sm my-4">
            Master the art of strategy with our Pure Strategic Mastery Coaching
            Program. Aimed at those dedicated to becoming visionary leaders,
            this program teaches you to develop and execute innovative
            strategies, anticipate future trends, and secure sustainable
            competitive advantages.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Coaching;
