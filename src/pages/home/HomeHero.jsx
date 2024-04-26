import { BarChartOutline } from 'react-ionicons';
import Hero from '../../component/common/Hero';
import image from "../../assets/bg.jpg"
import AnimatedButton from '../../component/common/AnimatedButton';
import {motion} from "framer-motion";
const HomeHero = () => {
  return (
    <Hero
      image={image}
      imageHeight='h-[650px]'
      subtitle={"WELCOME TO  Global Strategy Finance Consultants"}
      title={"The Most Trusted Consultants on The Planet"}
      description={`Your strategic partner in navigating the complexities of Finance and Business Strategy. We offer comprehensive solutions tailored to your unique business needs, ensuring excellence and integrity in every engagement. Discover how our expertise in Internal Audit, Tax Services, Feasibility Studies, Fractional CFO Services, and Valuation Reports can propel your business forward.
      `}
      button={<AnimatedButton text={"discover more"} />}
    >
      <div className="relative w-full md:h-48 over">
        <div className="md:absolute relative md:-top-[50%] -top-20 w-full translate-y-[10%] md:px-24 px-10">
          <div className="md:flex block gap-10 w-full lg:justify-end">
            <motion.div 
            initial={{"opacity":0, x:"700px"}}
                whileInView={{"opacity":1, x:0}}
                transition={{
                  duration: 1.5,
                  opacity: {
                    duration: 0.5,
                  }
                }}
                
              
   className="md:w-96 w-full h-52 bg-primary rounded-lg flex  items-start p-16 gap-x-4 ">
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
            <motion.div
            className="md:w-96 w-full h-52 bg-primary-light rounded-lg flex  items-start p-16 gap-x-4 md:my-0 my-10 "
    
              
            
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
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default HomeHero