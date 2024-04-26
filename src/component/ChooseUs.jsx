import React from 'react'
import ProgressBar from './common/ProgressBar';
import image from "./../assets/bg-4.jpg"

function ChooseUs() {
  return (
   <section className='w-full min-h-screen py-16 px-28 flex gap-x-32'>

    <div className='w-6/12'>
        <p className='uppercase text-primary font-bold tracking-wide text-xl'>WHY CHOOSE US</p>
        <h1 className='text-5xl font-bold my-10 '>Accounting With Unity</h1>
        <p className='text-secondary'>Proin laoreet nisi vitae pharetra mattis. Etiam luctus suscipit velit vitae ultricies mixuen. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo erat tempus.</p>

        <div className='flex my-10 gap-x-16'>
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

        </div>

        <div className='my-2'>

          <ProgressBar heading={"Expertise"}/>
          <ProgressBar heading={"Reputation"}/>
          <ProgressBar  heading={"Expertise"}/>
          <ProgressBar heading={"testing"}/>
        </div>
    </div>
    <div className='w-5/12'>

        <div>
            <div className='w-full bg-red-700 h-[600px] rounded-lg  relative'>
                <img src={image} className='roundedd-lg bg-cover absolute w-full h-full'/>
                <div className='absolute -bottom-20 -left-16 w-96 bg-primary h-40 rounded-lg flex items-center flex-col justify-center'>
                    <h2 className='text-center my-2 text-white font-bold text-5xl'>15 <sup>th</sup></h2>
                    <h6 className='text-center text-white text-2xl'>Years Experienced</h6>
                </div>
            </div>
         
        </div>

</div>

   </section>
  )
}

export default ChooseUs