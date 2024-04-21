import React from 'react'
import BlogCard from './common/BlogCard'

function Blog() {
  return (
    <section className='blog w-full  py-20'>
        <div className=' text-center'>
            <h6 className='inline-block text-primary text-center'>OUR BLOG</h6>
            <h1 className='block font-bold lg:text-5xl text-3xl p-4 lg:my-6 my-2'>Latest Blog & News for You</h1>
            <p className='text-secondary mx-auto text-center lg:w-[600px] w-full lg:p-10 p-4'>Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse pharetra. Finibus condimentum aenean lacinia sem metus Integer.</p>
        </div>

        <div className='max-w-full lg:px-24 p-4 py-6 grid lg:grid-cols-3 grid-flow-row gap-8 '>
        <BlogCard />
        <BlogCard />
        <BlogCard/>

        </div>

     


    </section>
  )
}

export default Blog