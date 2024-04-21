import React from 'react'
import { ArrowUpOutline } from 'react-ionicons'

function AnimatedButton({text}) {
  return (
    <button className='bg-primary-light w-max  px-8 py-3 text-white shadow-sm font-light uppercase rounded-lg transition-all duration-300  ease-in-out hover:bg-primary hover:-translate-y-2'>
       {text}
        <ArrowUpOutline
  color={'#00000'} 
  title={"discover more"}
  cssClasses={"text-white inline mx-2  rotate-45 mb-1"}
  
/>

    </button>
  )
}

export default AnimatedButton