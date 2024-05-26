import { BarChartOutline } from 'react-ionicons';
import Hero from '../../component/common/Hero';
import image from "../../assets/bg.jpg"
import AnimatedButton from '../../component/common/AnimatedButton';
import {motion} from "framer-motion";
const HomeHero = () => {
  return (
    <Hero
      image={image}
      imageHeight="h-[700px]"
      subtitle={"WELCOME TO"}
      title={"Global Strategy Finance Consultants"}
      description={<>
      <p>
      We offer a specialized STRATEGY MASTERY PROGRAM, PERSONAL DEVELOPMENT and STRATEGIC FINANCE COACHING, designed to significantly enhance our clients' career trajectories and empower them to expand or establish their own businesses. In addition to these services, we teach CLIENTS HOW TO BECOME FRACTIONAL CFOS, providing them with the skills necessary to manage financial strategies in diverse business environments. Our expert guidance is tailored to ensure sustainable growth and long-term success, positioning us as your strategic partner in navigating the complexities of finance and business strategy.
        </p>
        <p>
          <br/>
        Discover the breadth of our services including Internal Audit, Tax Services, Feasibility Studies, Fractional CFO Services, and Valuation Reports. Each offering is executed with excellence and integrity, aimed at propelling your business forward. Allow us to show you how our expertise can transform your business landscape, ensuring success and growth in every engagement.
        </p>
      </>}
      button={<AnimatedButton text={"discover more"} />}
      animate={true}
    >
      <motion.div 
      initial={{ opacity: 0, x: "100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        opacity: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="relative w-full md:h-48 over">
        <div className="md:absolute relative md:-top-[50%] -top-20 w-full translate-y-[10%] md:px-24 px-10">
          <div className="md:flex block gap-10 w-full lg:justify-end">
            <motion.div
              className="md:w-96 w-full h-52 bg-primary rounded-lg flex  items-start p-16 gap-x-4 "
            >
              <i>
                <BarChartOutline
                  color={"#00000"}
                  title={"dashboard"}
                  width={"35px"}
                  height={"35px"}
                  cssClasses={"text-white"}
                />
              </i>

              <div>
                <h4 className="text-white font-semibold text-2xl">
                  Time-Saving
                </h4>

                <p className="text-white my-2">
                  Aliquam tincidunt mi vitae odio mixue molestie.
                </p>
              </div>
            </motion.div>
            <motion.div className="md:w-96 w-full h-52 bg-primary-light rounded-lg flex  items-start p-16 gap-x-4 md:my-0 my-10 ">
              <i>
                <BarChartOutline
                  color={"#00000"}
                  title={"dashboard"}
                  width={"35px"}
                  height={"35px"}
                  cssClasses={"text-white"}
                />
              </i>

              <div>
                <h4 className="text-white font-semibold text-2xl">
                  Time-Saving
                </h4>

                <p className="text-white my-2">
                  Aliquam tincidunt mi vitae odio mixue molestie.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Hero>
  );
}

export default HomeHero