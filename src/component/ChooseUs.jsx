import React from 'react'
import ProgressBar from './common/ProgressBar';
import image from "./../assets/bg-4.jpg"

function ChooseUs() {
  return (
   <section className='w-full min-h-screen py-16 lg:px-28 px-16 flex lg:flex-nowrap flex-wrap  lg:gap-x-32'>

    <div className='lg:w-6/12 w-full lg:order-first order-last my-32'>
        <p className='uppercase text-primary font-bold tracking-wide text-xl'>WHY CHOOSE US</p>
        <h1 className="text-5xl font-bold my-10 leading-snug">
          Discover the Global Strategy Finance Consultants difference
        </h1>
        <p className="text-secondary leading-relaxed">
          Discover the Global Strategy Finance Consultants difference - Our
          client-centric approach, combined with our deep industry knowledge and
          technical expertise, sets us apart. We're not just consultants; we're
          your partners in achieving business excellence.
        </p>


        {/* <div className='flex lg:flex-nowrap flex-wrap my-10 gap-x-16'>
            <div className='flex'>
                <i></i>
                <div>
                <h2 className='text-2xl mb-6 font-bold'>Experienced</h2>
                <p>Etiam luctus suscipit velit nec ultricies augue sed moles.</p>
                </div>
            </div>
            <div className='flex'>
                <i></i>
                <div>
                <h2 className='text-2xl mb-6 font-bold'>Free Consultation</h2>
                <p>Etiam luctus suscipit velit nec ultricies augue sed moles.</p>
                </div>
            </div>

        </div> */}

        <div className='my-2'>

          <ProgressBar percentage={40} heading={"Expertise"}/>
          <ProgressBar percentage={90} heading={"Reputation"}/>
          <ProgressBar percentage={60}  heading={"Efficiency"}/>
          <ProgressBar percentage={70} heading={"Consulting"}/>
        </div>
    </div>
    <div className='lg:w-5/12 w-full block  lg:order-last order-first '>

    <div className='w-full  h-[600px] rounded-lg  relative'>
                <img src={image} className='roundedd-lg bg-cover absolute w-full h-full'/>
                <div className='absolute -bottom-20 lg:-left-16 left-14 w-96 bg-primary h-40 rounded-lg flex items-center flex-col justify-center'>
                    <h2 className='text-center my-2 text-white font-bold text-5xl'>5 <sup>th</sup></h2>
                    <h6 className='text-center text-white text-2xl'>Years Experienced</h6>
                </div>
            </div>

</div>

   </section>
  )
}

export default ChooseUs