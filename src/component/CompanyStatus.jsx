import React from 'react'

function CompanyStatus() {
  return (
    <div className='w-full h-96 bg-red-900 fixed-image flex items-center p-28 my-28'>

        <div className='flex items-center gap-20'>
            <h1 className='text-white text-5xl font-bold tracking-wide leading-snug'>
            Our Company In Number
            </h1>

            <h4 className='text-center text-white  min-w-max'>
                <span className='block text-6xl font-bold'>15<sup className='p-2'>th</sup></span>
                <span className='text-2xl font-bold' >
                Years Experience

                </span>
            </h4>
            <h4 className='text-center text-white min-w-max'>
                <span className='block text-6xl font-bold'>75000<sup className='p-2'>+</sup></span>
                <span className='text-2xl font-bold' >
                Happy Client
                </span>
            </h4>


            <h4 className='text-center text-white min-w-max'>
                <span className='block text-6xl font-bold'>430000<sup className='p-2'>+</sup></span>
                <span className='text-2xl font-bold' >
                Project Completed
                </span>
            </h4>
        
        </div>

    </div>
  )
}

export default CompanyStatus