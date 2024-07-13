import React from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
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
        <motion.div  
         initial={{ opacity: 0, x: "-100%", rotate:30, transformOrigin:"top left" }}
         whileInView={{ opacity: 1, x: 0, rotate:0 }}
       
         transition={{
           duration: 0.5,
           opacity: {
             duration: 0.2,
           },
         }}
         className="bg-primary
          hover:bg-primary-light hover:border-teal-200
           border-white border-t-4 transition-colors select-none  p-10 my-2" onClick={()=> navigate("/coaching/1")}>
          <h1 className="text-xl font-bold my-2 text-white ">
          CFO Services Package
          </h1>
          <p className="text-white font-thin text-sm my-4">
            Embark on a transformative journey with our Personal Development
            Coaching Program. Designed for professionals seeking personal
            growth, this program enhances skills, boosts confidence, and
            accelerates career advancement through workshops and personalized
            coaching.
          </p>
          <ul>
            <li className="text-white my-4">
            How to secure the job of your dream (different levels)
            </li>
          <li className="text-white my-4">
          Self Management Skills
          </li>
          <li className="text-white my-4">
          Career Advancement Strategies
          </li>
          </ul>
        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: "50%" }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{
           duration: 0.3,
           opacity: {
             duration: 0.2,
           },
         }}
        className="bg-primary hover:bg-primary-light hover:border-teal-200 border-white border-t-4 transition-colors select-none  p-10 my-2" onClick={()=> navigate("/coaching/2")}>
          <h1 className="text-xl font-bold my-2 text-white ">
          Finance Business Partner Package
          </h1>
          <p className="text-white font-thin text-sm my-4">
            Elevate your financial leadership with our Strategic Finance
            Coaching Program. Tailored for finance professionals and business
            leaders, this program sharpens strategic decision-making and
            understanding of market dynamics, empowering you to navigate the
            complexities of finance and strategy.
          </p>
          <ul>
            <li className="text-white my-4">How to simply building Financial Models for Different companies</li>
            <li className="text-white my-4">Financial Analysis for Different companies</li>
            <li className="text-white my-4">How to build Powerful Financial Dashboards</li>
            <li className="text-white my-4">Advanced Corporate Finance Mastery</li>
            <li className="text-white my-4">Mastering Feasibility Study Reports</li>
            <li className="text-white my-4">
            Comprehensive Valuation Techniques
            </li>
            <li className="text-white my-4">Integrated Business Strategy & Financial Management
            </li>
          </ul>
        </motion.div>
        <motion.div
        
        initial={{ opacity: 0, x: "100%", rotate:-30, transformOrigin:"top right", }}
        whileInView={{ opacity: 1, x: 0, rotate:0 }}
        transition={{
          duration: 0.5,
          opacity: {
            duration: 0.2,
          },
        }}
        className="bg-primary hover:bg-primary-light hover:border-teal-200 border-white border-t-4 transition-colors select-none  p-10 my-2" onClick={()=> navigate("/coaching/2")}>
          <h1 className="text-xl font-bold my-2 text-white ">
          Growth and Valuation Package
          </h1>
          <p className="text-white font-thin text-sm my-4">
            Master the art of strategy with our Pure Strategic Mastery Coaching
            Program. Aimed at those dedicated to becoming visionary leaders,
            this program teaches you to develop and execute innovative
            strategies, anticipate future trends, and secure sustainable
            competitive advantages.
          </p>
          <ul>
            <li className="my-4 text-white">
            Strategic Leadership for Execution
            </li>
            <li className="my-4 text-white">
            Business Strategy Development
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Coaching;
