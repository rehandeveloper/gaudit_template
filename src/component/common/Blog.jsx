import React from 'react'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <section className='blog w-full'>
        <div className='wrapper'>
            <div className='flex flex-col items-center'>
            </div>
            <h6 className='inline-block text-primary'>OUR BLOG</h6>
            <h1 className='block font-bold text-5xl my-6'>Latest Blog & News for You</h1>
            <p className='text-secondary mx-auto text-center w-[600px]'>Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse pharetra. Finibus condimentum aenean lacinia sem metus Integer.</p>
        </div>

        <div className='max-w-full grid grid-cols-3 sm:grid-cols-2 grid-flow-row gap-8 my-14 '>
        <BlogCard />
        <BlogCard />
        <BlogCard/>

        </div>

     


    </section>
  )
}

export default Blog