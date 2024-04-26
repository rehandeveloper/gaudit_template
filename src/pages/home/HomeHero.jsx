import { BarChartOutline } from 'react-ionicons';
import Hero from '../../component/common/Hero';
import image from "../../assets/bg.jpg"
import AnimatedButton from '../../component/common/AnimatedButton';
import {motion} from "framer-motion";
const HomeHero = () => {
  return (
    <Hero
      image={image}
      imageHeight="h-[650px]"
      subtitle={"WELCOME TO"}
      title={"Global Strategy Finance Consultants"}
      description={`We offer specialized Strategy Mastery Program & Strategic Finance coaching to our clients, designed to enhance their career trajectories and empower them to expand or establish their own businesses. Our expert guidance is tailored to ensure sustainable growth and long-term success in their professional endeavors.`}
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