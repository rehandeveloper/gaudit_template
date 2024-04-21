import { BarChartOutline } from 'react-ionicons';
import Hero from '../../component/common/Hero';
import image from "../../assets/bg.jpg"
import AnimatedButton from '../../component/common/AnimatedButton';
const HomeHero = () => {
  return (
    <Hero
      image={image}
      subtitle={"WELCOME TO GAUDIT"}
      title={"The Most Trusted Accountants on The Planet"}
      description={`Puisque ullamcorper molestie lacus praesent id posuere diam quis
            ultrices tellus liquam. Semamet luctus vivamus tincidunt nulla et
            mauris mollis a iaculis risu.`}
      button={<AnimatedButton text={"discover more"} />}
    >
      <div className="relative w-full md:h-48  ">
        <div className="md:absolute relative md:-top-[50%] -top-20 w-full translate-y-[10%] md:px-24 px-10">
          <div className="md:flex block gap-10 w-full lg:justify-end">
            <div className="md:w-96 w-full h-52 bg-primary rounded-lg flex  items-start p-16 gap-x-4 ">
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
            </div>
            <div className="md:w-96 w-full h-52 bg-primary-light rounded-lg flex  items-start p-16 gap-x-4 md:my-0 my-10 ">
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
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default HomeHero