import React from 'react'
import { ArrowUpOutline, BarChartOutline } from 'react-ionicons'
import AnimatedButton from './AnimatedButton'

function Hero() {
  return (
    <>
      <div className="relative w-full h-[600px] hero-image bg-cover bg-no-repeat bg-center object-cover lg:px-20 p-16 font-semibold ">
    <div className='w-full lg:w-1/2'>
    <p className='text-primary-light-1 my-4'>WELCOME TO GAUDIT</p>
    <h1 className='w-full text-4xl  lg:text-6xl xl:text-7xl text-white lg:leading-tight xl:leading-tight leading-normal'>
        The Most Trusted Accountants on The Planet
    </h1>

    <p className='text-muted font-thin my-8'>
    Puisque ullamcorper molestie lacus praesent id posuere diam quis ultrices tellus liquam. Semamet luctus vivamus tincidunt nulla et mauris mollis a iaculis risu.
    </p>



    <AnimatedButton text={"discover more"}/>

    </div>
    </div>
    <div className='relative w-full md:h-48  '>


        <div className='md:absolute relative md:-top-[50%] -top-20 w-full translate-y-[10%] md:px-24 px-10'>

            <div className='md:flex block gap-10 w-full lg:justify-end'>
                <div className='md:w-96 w-full h-52 bg-primary rounded-lg flex  items-start p-16 gap-x-4 '>
                    <i><BarChartOutline
  color={'#00000'} 
  title={"dashboard"}
  width={"35px"}
height={"35px"}
cssClasses={"text-white"}
/></i>

<div>
<h4 className='text-white font-semibold text-2xl'>Time-Saving</h4>    
                    
                    <p className='text-white my-2'>
                    Aliquam tincidunt mi vitae odio mixue molestie.
                    </p>

</div>

                   
                </div>
                <div className='md:w-96 w-full h-52 bg-primary-light rounded-lg flex  items-start p-16 gap-x-4 md:my-0 my-10 '>
                    <i><BarChartOutline
                        color={'#00000'} 
                        title={"dashboard"}
                        width={"35px"}
                        height={"35px"}
                        cssClasses={"text-white"}
                        /></i>

                        <div>
                        <h4 className='text-white font-semibold text-2xl'>Time-Saving</h4>    
                                            
                        <p className='text-white my-2'>
                        Aliquam tincidunt mi vitae odio mixue molestie.
                        </p>

                        </div>

                   
                </div>
            </div>

        </div>

       


    </div>
    
    </>
  
  )
}

export default Hero