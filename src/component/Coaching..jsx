import React from 'react'

function Coaching() {
  return (
    <section className='w-full min-h-max py-16 lg:px-28 px-16  lg:gap-x-32'>

    <div className='text-center  my-10'>
        <p className='uppercase text-primary font-bold tracking-wide text-xl'>Our Coaching Programs
    </p>      
    </div>

<div className='md:flex md-flex-wrap gap-x-10'>
<div className='bg-primary hover:bg-primary-light transition-colors select-none  p-10 my-2'>
    <h1 className='text-xl font-bold my-2 text-white '>Personal Development Coaching Program</h1>
        <p className='text-white font-thin text-sm my-4'>
        Embark on a transformative journey with our Personal Development Coaching Program. Designed for professionals seeking personal growth, this program enhances skills, boosts confidence, and accelerates career advancement through workshops and personalized coaching.

        </p>
    </div>

    <div className='bg-primary hover:bg-primary-light transition-colors select-none  p-10 my-2'>
    <h1 className='text-xl font-bold my-2 text-white '>Strategic Finance Coaching Program</h1>
        <p className='text-white font-thin text-sm my-4'>
        Elevate your financial leadership with our Strategic Finance Coaching Program. Tailored for finance professionals and business leaders, this program sharpens strategic decision-making and understanding of market dynamics, empowering you to navigate the complexities of finance and strategy.
        </p>
    </div>
    <div className='bg-primary hover:bg-primary-light transition-colors select-none  p-10 my-2'>
    <h1 className='text-xl font-bold my-2 text-white '>Pure Strategic Mastery Coaching Program </h1>
        <p className='text-white font-thin text-sm my-4'>
        Master the art of strategy with our Pure Strategic Mastery Coaching Program. Aimed at those dedicated to becoming visionary leaders, this program teaches you to develop and execute innovative strategies, anticipate future trends, and secure sustainable competitive advantages.
        </p>
    </div>
  

</div>
   

   </section>
  )
}

export default Coaching